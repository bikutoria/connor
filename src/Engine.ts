import {
  buildSearchEngine,
  loadFieldActions,
  SearchEngine,
  getOrganizationEndpoints,
} from "@coveo/headless";


const FIELDS = [
  "source",
  "app_use_case",
  "recipe_date_created",
  "recipe_last_edit_date",
  "app_recipe_creator",
  "app_rating",
  "industries",
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
      pipeline: "connectivity-app-store",
      searchHub: "connectivity-library",
    },
  },
});

export const headlessEngine = registerAdditionalFields(buildEngine);
