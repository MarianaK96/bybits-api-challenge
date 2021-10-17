export const getPolicy = (cookie) => {
  return fetch(`https://api.bybits.co.uk/policys/details`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookie}`,
      Environment: "mock",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      const data = response.json();

      return data;
    })
    .then((data) => {
      const policyData = data.policy;
      const policyObject = [
        [
          {
            title: "policy reference",
            info: policyData.policy_reference,
          },
          {
            title: "cover type",
            info: policyData.cover,
          },
          {
            title: "vehicle",
            info: data.vehicle.make,
          },
          {
            title: "address",
            info:
              policyData.address.line_1 +
              ` , ` +
              policyData.address.line_2 +
              ` , ` +
              policyData.address.postcode,
          },
        ],
        [
          {
            title: "required excess",
            info: `£` + policyData.compulsory_excess,
          },
          {
            title: "monthly cost",
            info: `£` + data.pricing.subscription_rate,
          },
          {
            title: "monthly installments",
            info: data.pricing.subscription_installments,
          },
          {
            title: "billing date",
            info: policyData.billing_day_date + ` of each month`,
          },
        ],
        [
          {
            title: "first name",
            info: data.proposer.first_names,
          },
        ],
      ];
      return policyObject;
    });
};
