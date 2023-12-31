// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sj7u5T6A4j1Xdo61ZkYEWA

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  cmsCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof CmsCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, cmsCredentialsProviderProps } = props;

  return (
    <CmsCredentialsProvider
      {...cmsCredentialsProviderProps}
      databaseId={
        cmsCredentialsProviderProps &&
        "databaseId" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseId!
          : ("cSw562ckHZYSDM3m5vcetq" as const)
      }
      databaseToken={
        cmsCredentialsProviderProps &&
        "databaseToken" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.databaseToken!
          : ("KMlAcAq83jVN7krmvrkK8Gi4VtxijGkduRWFQz0A9gQ0RrXWNoUmJe9q7x9TNplRu4noigUevFnJEtCCotA" as const)
      }
      host={
        cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.host!
          : ("https://data.plasmic.app" as const)
      }
      locale={
        cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
          ? cmsCredentialsProviderProps.locale!
          : undefined
      }
    >
      {children}
    </CmsCredentialsProvider>
  );
}
