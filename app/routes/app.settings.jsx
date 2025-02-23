import {
  Box,
  LegacyCard,
  Page,
  EmptyState,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function AdditionalPage() {
  return (
    <Page>
      <TitleBar title="Configurações" />
      <LegacyCard sectioned>
      <EmptyState
        heading="Manage your inventory transfers"
        action={{content: 'Add transfer'}}
        secondaryAction={{
          content: 'Learn more',
          url: 'https://help.shopify.com',
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>Track and receive your incoming inventory from suppliers.</p>
      </EmptyState>
    </LegacyCard>
    </Page>
  );
}
