var ADDRESS_MODAL = function (INPUT_TYPES) {
    return [{
        title: 'features.search.fields.transactionInfo',
        IsExpandable: false,
        fields: [
            {
                title: 'features.transaction.tabs.customer.address.sourceAddressID',
                name: 'Address.S_AddressID',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.targetAddressID',
                name: 'Address.T_AddressID',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.streetAddress1',
                name: 'Address.StreetAddress1',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.streetAddress2',
                name: 'Address.StreetAddress2',
                type: INPUT_TYPES.STRING
            },
            {
                title: 'features.transaction.tabs.customer.address.streetNumber',
                name: 'Address.StreetNumber',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.poBox',
                name: 'Address.PoBox',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.zip',
                name: 'Address.Zip',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.city',
                name: 'Address.City',
                type: INPUT_TYPES.STRING
            },
            {
                title: 'features.transaction.tabs.customer.address.state',
                name: 'Address.State',
                type: INPUT_TYPES.STRING,
            },
            {
                title: 'features.transaction.tabs.customer.address.country',
                name: 'Address.Country',
                type: INPUT_TYPES.STRING
            }
        ]
    }]
};

module.exports = ADDRESS_MODAL;