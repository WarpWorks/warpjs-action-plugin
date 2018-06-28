const testHelpers = require('@quoin/node-test-helpers');

const WarpjsActionPlugin = require('./index');

const expect = testHelpers.expect;

describe("index", () => {
    it("should expose a class with a constructor with 4 params", () => {
        expect(WarpjsActionPlugin).to.be.a('function').and.to.have.lengthOf(4);
        expect(WarpjsActionPlugin.name).to.equal('WarpjsActionPlugin');
    });

    context("static", () => {
        it("should expose 'Error' extends Error", () => {
            expect(WarpjsActionPlugin).to.have.property('Error');
            expect(WarpjsActionPlugin.Error.prototype).to.be.instanceof(Error);
        });
    });

    context("instance", () => {
        let instance;

        beforeEach(() => {
            const config = { auth: "admin" };
            const warpCore = {};
            const packageJson = {
                name: '@test/module',
                version: '1.2.3'
            };
            const pluginType = 'action-type';

            instance = new WarpjsActionPlugin(config, warpCore, packageJson, pluginType);
        });

        context(".jsScriptUrl", () => {
            it("should throw because not implemented", () => {
                expect(() => instance.jsScriptUrl).to.throw();
            });
        });

        context(".getRootUrl()", () => {
            it("should be a function with 3 params", () => {
                expect(instance).to.have.property('getRootUrl');
                expect(instance.getRootUrl).to.be.a('function').and.to.have.lengthOf(3);
            });

            it("should throw because not implemented", () => {
                expect(() => instance.getRootUrl()).to.throw();
            });
        });

        context(".toJSON()", () => {
            it("should be a function with 3 params", () => {
                expect(instance).to.have.property('toJSON');
                expect(instance.toJSON).to.be.a('function').and.to.have.lengthOf(3);
            });

            it("should throw because not all implemented", () => {
                expect(() => instance.toJSON('domain', 'type', 'id')).to.throw();
            });
        });
    });
});
