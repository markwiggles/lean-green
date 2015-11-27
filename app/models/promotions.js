import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  tracking:  DS.attr('string'),
  number:    DS.attr('string'),
  cost:      DS.attr('number'),
  shippedAt: DS.attr('date'),
  state:     DS.attr('string'),

  // Relationships
  order:                DS.belongsTo('order'),
  stockLocation:        DS.belongsTo('stockLocation'),
  shippingRates:        DS.hasMany('shippingRate'),
  selectedShippingRate: DS.belongsTo('shippingRate', { persistToServer: true }),
  lineItems:            DS.hasMany('lineItem')
});

// t.string   "description"
//     t.datetime "expires_at"
//     t.datetime "starts_at"
//     t.string   "name"
//     t.string   "type"
//     t.integer  "usage_limit"
//     t.string   "match_policy",          default: "all"
//     t.string   "code"
//     t.boolean  "advertise",             default: false
//     t.string   "path"
//     t.datetime "created_at",                            null: false
//     t.datetime "updated_at",                            null: false
//     t.integer  "promotion_category_id"
