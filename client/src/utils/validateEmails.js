const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmails (recipients){
    const invalidEmails = recipients
        .split(',')
        .map(value => value.trim())
        .filter(value => regex.test(value) === false);

    if(invalidEmails.length)
        return `These are the bad emails: ${invalidEmails}`;

    return;
}

export default validateEmails;