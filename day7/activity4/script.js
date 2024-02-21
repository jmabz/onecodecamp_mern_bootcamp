class EmailBuilder {
    constructor() {
        this.attachments = [];
    }
    
    setRecipient(recipient) {
        this.recipient = recipient;
        return this;
    }

    setSubject(subject) {
        this.subject = subject;
        return this;
    }

    setBody(body) {
        this.body = body;
        return this;
    }

    addAttachment(attachment) {
        this.attachments.push(attachment);
        return this;
    }

    send() {
        console.log("Sending email:");
        console.log("Recipient: ", this.recipient);
        console.log("Subject: ", this.subject);
        console.log("Body: ", this.body);
        console.log("Attachments: ", this.attachments);
    }
}

const email = new EmailBuilder();
email.setRecipient("something@somewhere.com")
    .setSubject("Package")
    .setBody("Hello! We've dispatched your package containing a foldable chair.")
    .addAttachment("chair.png")
    .send();