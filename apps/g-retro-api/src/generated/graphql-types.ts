/* eslint-disable */
import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { MyContext } from '../graphql/context/types';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: ResolverTypeParentWrapperPicked<TParent>, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise < TResult > | TResult
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

/**
 * The ResolverTypeWrapperPicked, in conjunction with resolverTypeWrapperSignature in config, will override the resolvers' return type.
 * This forces resolvers that return addressable entities to return their IDs only.
 * This works recursively to support relay relationships (connection - edge - node pattern).
 */
export type ResolverTypeWrapperPicked<T> = T extends NonNullable<T>
	? 'id' extends keyof NonNullable<T>
		? Pick<NonNullable<T>, 'id'>
		: { [K in keyof T]: ResolverTypeWrapperPicked<NonNullable<T>[K]> }
	: null | undefined;

/**
 * The ResolverTypeParentWrapperPicked is similar to the one above, but instead of the return type of resolvers, it Picks the id from the parent param from the resolvers.
 */
export type ResolverTypeParentWrapperPicked<T> = 'id' extends keyof T ? Pick<T, 'id'> : T;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Scalars DateTime */
  DateTime: { input: Date; output: Date; }
};

/** Board Type */
export type GQLBoard = {
  __typename?: 'Board';
  /** Creation date of Board */
  creationDate: Scalars['DateTime']['output'];
  /** Id of Board */
  id: Scalars['ID']['output'];
  /** Email of Board */
  title: Scalars['String']['output'];
};

/** Message Type */
export type GQLMessage = {
  __typename?: 'Message';
  /** Board of message */
  board: GQLBoard;
  /** Creation date of message */
  creationDate: Scalars['DateTime']['output'];
  /** Id of message */
  id: Scalars['ID']['output'];
  /** Section of message */
  section: GQLSection;
  /** Text of message */
  text: Scalars['String']['output'];
  /** User of message */
  user: GQLUser;
};

/** User Query */
export type GQLQuery = {
  __typename?: 'Query';
  /** Query to get an Board */
  board?: Maybe<GQLBoard>;
  /** Query to get an User */
  message?: Maybe<GQLMessage>;
  /** Query to get a Section */
  section?: Maybe<GQLSection>;
  /** Query to get an User */
  user?: Maybe<GQLUser>;
};


/** User Query */
export type GQLQueryUserArgs = {
  id: Scalars['ID']['input'];
};

/** Section Type */
export type GQLSection = {
  __typename?: 'Section';
  /** Id of Section */
  id: Scalars['ID']['output'];
  /** Name of Section */
  name: Scalars['String']['output'];
};

/** User Type */
export type GQLUser = {
  __typename?: 'User';
  /** Creation date of user */
  creationDate: Scalars['DateTime']['output'];
  /** Email of user */
  email: Scalars['String']['output'];
  /** First name of user */
  firstName: Scalars['String']['output'];
  /** Id of user */
  id: Scalars['ID']['output'];
  /** Last name of user */
  lastName: Scalars['String']['output'];
  /** Token of user */
  token?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = ResolverTypeWrapperPicked<T>;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GQLResolversTypes = {
  Board: ResolverTypeWrapper<GQLBoard>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Message: ResolverTypeWrapper<GQLMessage>;
  Query: ResolverTypeWrapper<{}>;
  Section: ResolverTypeWrapper<GQLSection>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<GQLUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GQLResolversParentTypes = {
  Board: GQLBoard;
  Boolean: Scalars['Boolean']['output'];
  DateTime: Scalars['DateTime']['output'];
  ID: Scalars['ID']['output'];
  Message: GQLMessage;
  Query: {};
  Section: GQLSection;
  String: Scalars['String']['output'];
  User: GQLUser;
};

export type GQLBoardResolvers<ContextType = MyContext, ParentType extends GQLResolversParentTypes['Board'] = GQLResolversParentTypes['Board']> = {
  creationDate?: Resolver<GQLResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GQLDateTimeScalarConfig extends GraphQLScalarTypeConfig<GQLResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GQLMessageResolvers<ContextType = MyContext, ParentType extends GQLResolversParentTypes['Message'] = GQLResolversParentTypes['Message']> = {
  board?: Resolver<GQLResolversTypes['Board'], ParentType, ContextType>;
  creationDate?: Resolver<GQLResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>;
  section?: Resolver<GQLResolversTypes['Section'], ParentType, ContextType>;
  text?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<GQLResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLQueryResolvers<ContextType = MyContext, ParentType extends GQLResolversParentTypes['Query'] = GQLResolversParentTypes['Query']> = {
  board?: Resolver<Maybe<GQLResolversTypes['Board']>, ParentType, ContextType>;
  message?: Resolver<Maybe<GQLResolversTypes['Message']>, ParentType, ContextType>;
  section?: Resolver<Maybe<GQLResolversTypes['Section']>, ParentType, ContextType>;
  user?: Resolver<Maybe<GQLResolversTypes['User']>, ParentType, ContextType, RequireFields<GQLQueryUserArgs, 'id'>>;
};

export type GQLSectionResolvers<ContextType = MyContext, ParentType extends GQLResolversParentTypes['Section'] = GQLResolversParentTypes['Section']> = {
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLUserResolvers<ContextType = MyContext, ParentType extends GQLResolversParentTypes['User'] = GQLResolversParentTypes['User']> = {
  creationDate?: Resolver<GQLResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GQLResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<GQLResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<GQLResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GQLResolvers<ContextType = MyContext> = {
  Board?: GQLBoardResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Message?: GQLMessageResolvers<ContextType>;
  Query?: GQLQueryResolvers<ContextType>;
  Section?: GQLSectionResolvers<ContextType>;
  User?: GQLUserResolvers<ContextType>;
};

