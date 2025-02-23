import { useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  DataTable,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar} from "@shopify/app-bridge-react";

export default function IndexPage() {
  return (
    <Page>
      <TitleBar title="Visão geral">
        <button variant="primary">
          Criar oferta
        </button>
      </TitleBar>
    </Page>
  );}