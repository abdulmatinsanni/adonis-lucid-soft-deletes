import {
  extendModelQueryBuilder
} from "../chunk-4FLDNTDF.js";
import "../chunk-EUXUH3YW.js";

// providers/lucid_soft_deletes_provider.ts
var LucidSoftDeletesProvider = class {
  constructor(app) {
    this.app = app;
  }
  app;
  async boot() {
    const { ModelQueryBuilder } = await this.app.import("@adonisjs/lucid/orm");
    extendModelQueryBuilder(ModelQueryBuilder);
  }
};
export {
  LucidSoftDeletesProvider as default
};
//# sourceMappingURL=lucid_soft_deletes_provider.js.map