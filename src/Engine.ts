import {
  buildSearchEngine,
  loadFieldActions,
  SearchEngine,
  getOrganizationEndpoints,
} from "@coveo/headless";


const FIELDS = [
  /*"ec_brand",
  "ec_category",
  "ec_cogs",
  "ec_description",
  "ec_images",
  "ec_in_stock",
  "ec_item_group_id",
  "ec_listing",
  "ec_name",
  "ec_parent_id",
  "ec_price",
  "ec_product_id",
  "ec_promo_price",
  "ec_rating",
  "ec_reviews",
  "ec_shortdesc",
  "ec_skus",
  "ec_thumbnails",
  "ec_variant_sku",*/
  "source",
  "permanentid",
];

const registerAdditionalFields = (headlessEngine: SearchEngine) => {
  const fieldActions = loadFieldActions(headlessEngine);
  headlessEngine.dispatch(fieldActions.registerFieldsToInclude(FIELDS));
  return headlessEngine;
};

const buildEngine = buildSearchEngine({
  configuration: {
    organizationId: "poclabsplaygroundv6cjujq7",
    accessToken: "xx220b7688-5876-4fa2-9a97-e02a57b8b7ee",
    organizationEndpoints: getOrganizationEndpoints(
      "poclabsplaygroundv6cjujq7"
    ),
    search: {
      pipeline: "Vic's Newstand",
      searchHub: "news-stand",
    },
  },
});

export const headlessEngine = registerAdditionalFields(buildEngine);
