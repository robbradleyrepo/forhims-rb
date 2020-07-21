import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { select } from "@storybook/addon-knobs/react";

import { Curtain } from "../../components/curtain";
import { Drawer } from "../../components/drawer";
import {
  convertConstantsToStorySelect,
  withRedux,
  withProductCategorySelectorKnob
} from "../../utils/storybook";

import { DRAWER_POSITIONS, DRAWER_STATES } from "../../constants/ui";

import { Ingredients } from "./ingredients.component";

storiesOf("Modules|Products/Ingredients", module)
  .addDecorator(withRedux)
  .addDecorator(withProductCategorySelectorKnob)
  .add("Default", () => {
    const title = text("Title", "full ingredient list");
    const summary = text(
      "Summary",
      "Naturally derived botanicals with hand-selected clinical ingredients that are SLS, Silicone, & Paraben Free."
    );
    const ingredients = text(
      "Ingredients",
      "Aqua, Aloe Barbadensis Leaf Extract, Cetearyl Alcohol (Coconut Derived), Aleurites Moluccana (Kakui) Seed Oil, Brassica Oleracea Italica Seed Oil, Brassicamidopropyl Dimethylamine Copaifera Officinalis (Brassica Nut Extract), Copaifera Officinalis (Balsam Copaiba) Resin, Bertholletia Excelsa (Copiiba Brazil Nut) Seed Oil, Astrocaryum Murumuru Seed Butter, Betaine (Sugar Beet), Hydrolyzed Adansonia Digitata (Baobob) Seed Extract, Playa Marine Collagen Complex (Soluble Collagen, Spirulina Maxima Extract, Digitata (Icelandic Sea Kelp) Extract, Kappaphycus Alvarezii (Hawaiian Red Algae) Extract, Sea Water Extract), Sea Salt, Citric Acid, Glycolic Acid, Phenyl Trimethicone, Behentrionium Methosulfate (Rapeseed Oil), Melaleuca Alternifolia (Tea Tree) Leaf Oil, Glycerin, Lonicera Caprifolium (Honeysuckle) Flower Extract, Tocopheryl Acetate (Vitamin E), Panthenol (Vitamin B5), Dimethicone/Mercaptopropyl Methicone Copolymer, Menthol, Guar Hydroxypropyltrimonium Chloride (Guar), Cocos Nucifera (Coconut) Water, Cinnamidopropyltrimonium Chloride, *Cetrimonium Chloride, Gardenia Tahitensis (Tiare) Flower Extract, *Trisodium Ethylenediamine Disuccinate, Quaternium 87, Elaeis Guineensis (Nicaraguan Palm) Oil, Illicium Verum (Star Anise) Extract, Manuka Honey Extract, Lonicera Japanica (Honeysuckle) Flower Fragrance Extract, Fragrance."
    );
    return (
      <Ingredients title={title} summary={summary} ingredients={ingredients} />
    );
  })
  .addWithJSX("Inside drawer", () => {
    const displayMode = select(
      "Show Drawer",
      convertConstantsToStorySelect(DRAWER_STATES),
      DRAWER_STATES.HALF
    );
    const title = text("Title", "full ingredient list");
    const summary = text(
      "Summary",
      "Naturally derived botanicals with hand-selected clinical ingredients that are SLS, Silicone, & Paraben Free."
    );
    const ingredients = text(
      "Ingredients",
      "Aqua, Aloe Barbadensis Leaf Extract, Cetearyl Alcohol (Coconut Derived), Aleurites Moluccana (Kakui) Seed Oil, Brassica Oleracea Italica Seed Oil, Brassicamidopropyl Dimethylamine Copaifera Officinalis (Brassica Nut Extract), Copaifera Officinalis (Balsam Copaiba) Resin, Bertholletia Excelsa (Copiiba Brazil Nut) Seed Oil, Astrocaryum Murumuru Seed Butter, Betaine (Sugar Beet), Hydrolyzed Adansonia Digitata (Baobob) Seed Extract, Playa Marine Collagen Complex (Soluble Collagen, Spirulina Maxima Extract, Digitata (Icelandic Sea Kelp) Extract, Kappaphycus Alvarezii (Hawaiian Red Algae) Extract, Sea Water Extract), Sea Salt, Citric Acid, Glycolic Acid, Phenyl Trimethicone, Behentrionium Methosulfate (Rapeseed Oil), Melaleuca Alternifolia (Tea Tree) Leaf Oil, Glycerin, Lonicera Caprifolium (Honeysuckle) Flower Extract, Tocopheryl Acetate (Vitamin E), Panthenol (Vitamin B5), Dimethicone/Mercaptopropyl Methicone Copolymer, Menthol, Guar Hydroxypropyltrimonium Chloride (Guar), Cocos Nucifera (Coconut) Water, Cinnamidopropyltrimonium Chloride, *Cetrimonium Chloride, Gardenia Tahitensis (Tiare) Flower Extract, *Trisodium Ethylenediamine Disuccinate, Quaternium 87, Elaeis Guineensis (Nicaraguan Palm) Oil, Illicium Verum (Star Anise) Extract, Manuka Honey Extract, Lonicera Japanica (Honeysuckle) Flower Fragrance Extract, Fragrance."
    );
    return (
      <div>
        <Drawer
          key="drawer-right"
          display={displayMode}
          position={DRAWER_POSITIONS.RIGHT}
          displayAboveNavigation
          content={
            <Ingredients
              title={title}
              summary={summary}
              ingredients={ingredients}
            />
          }
        />
        <Curtain visible={displayMode !== DRAWER_STATES.CLOSED} />
      </div>
    );
  });
