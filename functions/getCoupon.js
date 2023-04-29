const couponCodes = {
    SPICYFOOD5: 5,
    SPICYFOOD10: 10,
    SPICYFOOD15: 15,
    SPICYFOOD20: 20,
    SPICYFOOD25: 25,
    SPICYFOOD30: 30
};


export const getCoupon = (coupon) => {

    return couponCodes[coupon];
};