# dialogflow-wolfram-fulfillment


This is a small nodeJS application to help you connect Dialogflow and Wolfram|Alpha

Since I could not manage to find something similar, I thought this might be of help to somebody.
I needed a Fulfillment for Dialogflow that is able to communicate with the Wolfram|Alpha API. So this is what I built.

### Usage
To test on your local machine and still being able to connect the localhost to Dialogflow I used ngrok.

##### Step 1 - Install the dependencies
```sh
$ npm install
```

##### Step 2 - Start the application
```sh
$ node app.js
```

##### Step 3 - Start ngrok
```sh
$ ngrok http 80
```

##### Step 4 - In your console, you will see something similar to this:
snippet from https://ngrok.com/docs
```sh
ngrok by @inconshreveable

Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://92832de0.ngrok.io -> localhost:80
Forwarding                    https://92832de0.ngrok.io -> localhost:80

Connnections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```
##### Step 5 - Connect the Dialogflow Webhook
In Dialogflows Fulfillment just copy the https Forwarding into the Webhook URL. The input mask in Dialogflow should look something like the following picture:

<img src="https://cloud.google.com/dialogflow/docs/images/fulfillment-webhook-form.png" alt="Dialogflow Webhook Mask" width="500"/>



### Coming soon
Currently I am working on an integration for the Wolfram|Alpha Conversational API. This and a tutorial on how to use everything (for unexperienced developers) is going to come soon!

#### Here are some links that might be of help:
* [Dialogflow Docs](https://cloud.google.com/dialogflow/docs/reference/rpc/google.cloud.dialogflow.v2) - Reference for the correct WebhookResponse
* [Wolfram|Alpha Short Answers API](https://products.wolframalpha.com/short-answers-api/documentation/) - Documentation of the Wolfram|Alpha Short Answers API
* [Wolfram|Alpha Conversational API](http://products.wolframalpha.com/conversational-api/documentation/) - Documentation of the Wolfram|Alpha Conversational API