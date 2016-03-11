/**
 * Created by vjain3 on 2/20/16.
 */
'use strict';

describe('contiv.models.networks module', function () {

    beforeEach(module('contiv.models.networks'));

    describe('networks model', function () {

        var NetworksModel, $httpBackend;
        var networkListData = [
            {
                "key": "default:contiv-net1",
                "encap": "vxlan",
                "gateway": "20.1.2.254",
                "networkName": "contiv-net1",
                "subnet": "20.1.2.0/24",
                "tenantName": "default",
                "link-sets": {},
                "links": {
                    "Tenant": {
                        "type": "tenant",
                        "key": "default"
                    }
                }
            }
        ];

        var newNetworkData = {
            "key": "default:contiv-net2",
            "encap": "vxlan",
            "gateway": "20.1.3.254",
            "networkName": "contiv-net2",
            "subnet": "20.1.3.0/24",
            "tenantName": "default",
            "link-sets": {},
            "links": {
                "Tenant": {
                    "type": "tenant",
                    "key": "default"
                }
            }
        };

        beforeEach(inject(function (_NetworksModel_, _$httpBackend_) {
            NetworksModel = _NetworksModel_;
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'http://localhost:9999/api/networks/').respond(networkListData);
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should be defined', function () {
            //spec body
            expect(NetworksModel).toBeDefined();
        });

        it('get() should do a GET on /api/networks/ REST API', function () {
            $httpBackend.expectGET('http://localhost:9999/api/networks/');
            NetworksModel.get();
            $httpBackend.flush();
        });

        it('create() should do a POST on /api/networks REST API', function () {
            $httpBackend.expectPOST('http://localhost:9999/api/networks/' + newNetworkData.key + '/').respond(201, '');
            NetworksModel.create(newNetworkData);
            $httpBackend.flush();
        });

        it('delete() should do a DELETE on /api/networks REST API', function () {
            $httpBackend.expectDELETE('http://localhost:9999/api/networks/' + networkListData[0].key + '/').respond(201, '');
            NetworksModel.delete(networkListData[0]);
            $httpBackend.flush();
        });

    });
});