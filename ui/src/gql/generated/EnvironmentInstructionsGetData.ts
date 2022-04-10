/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TagType } from "./globalTypes";

// ====================================================
// GraphQL query operation: EnvironmentInstructionsGetData
// ====================================================

export interface EnvironmentInstructionsGetData_getEnvironment_revision_tags {
  __typename: "Tag";
  /**
   * Tag ID
   */
  id: string;
  /**
   * Tag name
   */
  name: string;
  /**
   * Tag code, this persists when cloned. It is generated by the parent tag and
   * inherited by all other tags cloned from this point. It is immutable by design.
   */
  tag_code: string;
  /**
   * Tag type, see `TagType`
   */
  type: TagType;
  /**
   * If the tag should be automatically loaded on all pages.
   */
  auto_load: boolean;
}

export interface EnvironmentInstructionsGetData_getEnvironment_revision {
  __typename: "Revision";
  /**
   * Revision ID
   */
  id: string;
  /**
   * Get all the tags linked to this revision
   */
  tags: EnvironmentInstructionsGetData_getEnvironment_revision_tags[];
}

export interface EnvironmentInstructionsGetData_getEnvironment {
  __typename: "Environment";
  /**
   * `Environment` ID
   */
  id: string;
  /**
   * `Environment` name
   */
  name: string;
  /**
   * `Environment`'s CNAME
   */
  cname: string;
  /**
   * `Environment`'s install domain used to embed in web page
   */
  install_domain: string;
  /**
   * `Environment`'s custom domain name if configured
   */
  custom_domain: string | null;
  /**
   * `Environment`'s install endpoint
   */
  install_endpoint: string;
  /**
   * `Revision` currently attached to the `Environment`
   */
  revision: EnvironmentInstructionsGetData_getEnvironment_revision;
}

export interface EnvironmentInstructionsGetData {
  /**
   * @bound=Environment
   * Get an `Environment` model from `Environment` ID
   */
  getEnvironment: EnvironmentInstructionsGetData_getEnvironment;
}

export interface EnvironmentInstructionsGetDataVariables {
  id: string;
}
