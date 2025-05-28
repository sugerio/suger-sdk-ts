import {expect, test} from "vitest";
import * as api from "../index";
import {createConfiguration, ProductApi, ServerConfiguration} from "../index";

test("test get offer by productId", async () => {

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
    const apiKey = "Key 95d2983ca68bd6f9655b9d026b05e9afbdb6a601a700c18007f9eb3accec7a067b306e8233278dd36f88d028c6007053cfe3fc7a585ed2aef4f3cf14b99482ca"
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
    const product = new ProductApi(configuration);
    const orgId = "w43Vc6UfM"
    const productId = "gN-28oeRl"
    const offer = await product.getProduct(orgId, productId)
    expect(offer.id).toBe(productId)
})
