'use strict';

define([
        'src/util/api',
        'superagent',
        'uri/URI',
        'lodash',
        'src/util/couchdbAttachments'
    ],
    function (API, superagent, URI, _, CDB) {
        var viewSearch = ['key', 'startkey', 'endkey'];
        var mandatoryOptions = ['url', 'database'];

        class Roc {
            constructor(opts) {
                this.url = opts.url;
                this.view = opts.view;
                this.database = opts.database;


                this.requestUrl = new URI(opts.url);
                this.databaseUrl = this.requestUrl.directory(`${this.requestUrl.directory()}/db/${this.database}`).normalize().href();
                this.entryUrl = `${this.databaseUrl}entry`;
                this.requestUrl = new URI(`${this.databaseUrl}_view/${this.view}`);

                for (let i = 0; i < viewSearch.length; i++) {
                    if (opts[viewSearch[i]]) {
                        this.requestUrl.addSearch(viewSearch[i], JSON.stringify(opts[viewSearch[i]]));
                    }
                }

                this.requestUrl = this.requestUrl.normalize().href();
                this.varName = opts.varName;


                this.init();
            }

            init() {
                this.__init = superagent.get(this.requestUrl)
                    .withCredentials()
                    .then(res => {
                        if (res && res.body && res.status == 200) {
                            API.createData(this.varName, res.body);
                            this.data = res.body;
                        }
                    });
            }

            getByUuid(uuid, force) {
                return this.__init.then(() => {
                    if (!force) {
                        return this._findByUuid(uuid);
                    } else {
                        console.log('force get');
                        return superagent.get(`${this.entryUrl}/${uuid}`)
                            .withCredentials()
                            .end()
                            .then(res => {
                                if (res.body && res.status == 200) {
                                    this._updateByUuid(uuid, res.body);
                                    return res.body;
                                }
                            });
                    }
                });
            }

            _updateByUuid(uuid, data) {
                var idx = this._findIndexByUuid(uuid);
                this.data.setChildSync([idx], data);
            }

            getById(id) {
                var id = DataObject.resurrect(id);
                return this.__init.then(data => {
                    return data.find(entry => {
                        const $id = DataObject.resurrect(entry.$id);
                        return _.isEqual($id, id);
                    });
                });
            }

            _findByUuid(uuid) {
                return this.data.find(entry => String(entry._id) === String(uuid));
            }

            _findIndexByUuid(uuid) {
                this.data.findIndex(entry => String(entry._id) === String(uuid));
            }

            _findById(id) {
                id = DataObject.resurrect(id);
                return this.data.find(entry => _.isEqual(id, DataObject.resurrect(entry.$id)));
            }

            create(toSave) {
                return this.__init
                    .then(() => {
                        return superagent.post(this.entryUrl)
                            .withCredentials()
                            .send(toSave)
                            .end();
                    })
                    .then(res => {
                        if (res.body && (res.status == 200 || res.status == 201)) {
                            return this.getByUuid(res.body.id, true);
                        } else {
                            console.log(res);
                        }
                    })
                    .then(entry => {
                        if (!entry) return;
                        this.data.push(entry);
                        this.data.triggerChange();
                    });
            }

            update(entry, force) {
                var oldEntry;
                return this.__init
                    .then(() => {
                        oldEntry = this.data.find(e => String(e._id) === String(entry._id));
                        if (!entry && !force) return;
                        return superagent.put(`${this.entryUrl}/${String(entry._id)}`)
                            .withCredentials()
                            .send(entry);
                    }).then(res => {
                        if (!res) return;
                        if (res.body && res.status == 200) {
                            if (oldEntry) {
                                this._updateByUuid(entry._id, entry);
                            }

                        }
                    });
            }

            refresh() {
                this.init();
            }

            addAttachmentByUuid(uuid, attachments) {
                return this.__init.then(() => {
                    var docUrl = `${this.entryUrl}/${uuid}`;
                    var cdb = new CDB(docUrl);

                    return cdb.inlineUploads(attachments)
                        .then(attachments => {
                            return this.getByUuid(uuid, true).then(res => {
                                if(res._id === uuid) {
                                    return attachments;
                                }
                            });
                        });
                });
            }

            addAttachmentById(id, attachment) {
                return this.__init.then(() => {
                    var uuid = this._findById(id)._id;
                    return this.addAttachmentByUuid(uuid, attachment);
                });
            }


            removeByUuid(uuid, force) {
                uuid = String(uuid);
                if (force) {
                    var prom = Promise.resolve();
                } else {
                    prom = this.__init;
                }
                return prom.then(() => {
                    return superagent.del(`${this.entryUrl}/${uuid}`)
                        .withCredentials()
                        .end();
                }).then(res => {
                    if (res.body && res.status == 200) {
                        var idx = this.data.findIndex(entry => {
                            return String(entry._id) === uuid;
                        });
                        if (idx !== -1) {
                            this.data.splice(idx, 1);
                            this.data.triggerChange();
                        }
                    }
                });
            }
        }

        return Roc;
    });

