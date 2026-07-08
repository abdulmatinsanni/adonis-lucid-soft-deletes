import { DateTime } from 'luxon';
import type { NormalizeConstructor } from '@adonisjs/core/types/helpers';
import type { LucidModel, ModelQueryBuilderContract } from '@adonisjs/lucid/types/model';
import type { QueryClientContract } from '@adonisjs/lucid/types/database';
import { BaseModel } from '@adonisjs/lucid/orm';
type ModelQueryBuilderContractWithIgnoreDeleted<T extends LucidModel, R = InstanceType<T>> = ModelQueryBuilderContract<T, R> & {
    ignoreDeleted: boolean;
};
export declare function SoftDeletes<T extends NormalizeConstructor<typeof BaseModel>>(superclass: T): {
    new (...args: any[]): {
        /**
         * Force delete instance property
         */
        $forceDelete: boolean;
        /**
         * Soft deleted property
         */
        deletedAt?: DateTime | null;
        /**
         * Computed trashed property
         */
        get trashed(): boolean;
        /**
         * Override default $getQueryFor method
         */
        $getQueryFor(action: "insert" | "update" | "delete" | "refresh", client: QueryClientContract): any;
        /**
         * Override default delete method
         */
        delete(): Promise<void>;
        /**
         * Restore model
         */
        restore(): Promise</*elided*/ any>;
        /**
         * Force delete model
         */
        forceDelete(): Promise<void>;
    };
    ignoreDeleted<Model extends /*elided*/ any & T>(query: ModelQueryBuilderContractWithIgnoreDeleted<Model, InstanceType<Model>>): void;
    ignoreDeletedPaginate<Model extends /*elided*/ any & T>([countQuery, query]: [ModelQueryBuilderContractWithIgnoreDeleted<Model, InstanceType<Model>>, ModelQueryBuilderContractWithIgnoreDeleted<Model, InstanceType<Model>>]): void;
    disableIgnore<Model extends /*elided*/ any & T, Result = InstanceType<Model>>(this: Model, query: ModelQueryBuilderContractWithIgnoreDeleted<Model, Result>): ModelQueryBuilderContractWithIgnoreDeleted<Model, Result>;
    /**
     * Fetch all models without filter by deleted_at
     */
    withTrashed<Model extends /*elided*/ any & T>(this: Model): ModelQueryBuilderContractWithIgnoreDeleted<Model, InstanceType<T>>;
    /**
     * Fetch models only with deleted_at
     */
    onlyTrashed<Model extends /*elided*/ any & T>(this: Model): ModelQueryBuilderContractWithIgnoreDeleted<Model, InstanceType<Model>>;
} & T;
export {};
