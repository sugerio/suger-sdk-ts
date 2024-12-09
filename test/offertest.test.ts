import {expect, test} from "vitest";
import * as api from "../index";
import {createConfiguration, OfferApi, ServerConfiguration} from "../index";

test("test get offer by offerId", async () => {

    // Implements a simple middleware to modify requests before (`pre`) they are sent
    // and after (`post`) they have been received
    class Test implements api.Middleware {
        pre(context: api.RequestContext): Promise<api.RequestContext> {
            // Modify context here and return
            return Promise.resolve(context);
        }

        post(context: api.ResponseContext): Promise<api.ResponseContext> {
            return Promise.resolve(context);
        }

    }

    const server = new ServerConfiguration<{}>("https://api.dev.suger.cloud", {})
    const apiKey = "Key b277c95e5e92ff7a8e96e74baf6ee2fb080db3e6507977c0067791abc1f52da4220e866e2081117a1721788aa2e9dc6fe009f2a699f17a7bba23973af6954db4"
    const authConfig: api.AuthMethodsConfiguration = {
        APIKeyAuth: apiKey,
    }

    // Create configuration parameter object
    const configurationParameters = {
        baseServer: server, // First server is default
        authMethods: authConfig, // No auth is default
        promiseMiddleware: [new Test()],
    }
    const configuration = createConfiguration(configurationParameters);
    const offerApi = new OfferApi(configuration);
    const orgId = "w43Vc6UfM"
    const offerId = "1Edc6L49p"
    const offer = await offerApi.getOffer(orgId, offerId)
    expect(offer.id).toBe(offerId)
})
