'use strict';
const { sanitizeEntity } = require('strapi-utils') 
const finder = require('strapi-utils/lib/finder')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx){
        const { user } = ctx.parseCookie(user);
        const { jwt } = ctx.parseCookie(jwt);
        let entities 
        if(ctx.query._q) {
            entities = await strapi.services.transactions.search({...ctx.query, user: user.id, jwt})
        }
        else {
            entities = await strapi.services.transactions.find({...ctx.query, user: user.id, jwt})
        }
        return entities.map(entity=> sanitizeEntity(entity, {model: strapi.models.transactions}))
    }
};
