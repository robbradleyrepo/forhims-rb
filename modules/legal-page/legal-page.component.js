import PropTypes from "prop-types";
import React from "react";
import { Block } from "../../components/block";
import { Markdown } from "../../components/markdown";
import { compose, replace } from "ramda";
import { ContentPageBody } from "../../components/content-page";
import {
  LegalParagraph,
  LegalList,
  Strong,
  Emphasis,
  Table,
  Link,
  LegalListOrdered
} from "./legal-page.style";
import { Headline4 } from "../../components/fonts/h4";
import stripUnit from "../../node_modules/polished/lib/helpers/stripUnit";
import { sizing } from "../../theme/spacing";
import { BASE_FONT_SIZE } from "../../theme/typography";

const ParagraphRenderer = props => <LegalParagraph {...props} />;
const ListRenderer = props =>
  props.ordered ? <LegalListOrdered {...props} /> : <LegalList {...props} />;
const BoldRenderer = props => <Strong {...props} />;
const EmphasisRenderer = props => <Emphasis {...props} />;
const TableRenderer = props => <Table {...props} />;
const LinkRenderer = props => <Link {...props} />;

export const LegalPageComponent = ({ copy, title, states }) => {
  const source = compose(replace(/{{legalEntity}}/gi, states))(copy);
  return (
    <Block>
      <ContentPageBody
        content={
          <Block
            pt={stripUnit(sizing.header) * BASE_FONT_SIZE}
            pb={4}
            width={"100%"}
          >
            <Headline4>{title}</Headline4>
            <Markdown
              content={source}
              renderers={{
                paragraph: ParagraphRenderer,
                list: ListRenderer,
                strong: BoldRenderer,
                emphasis: EmphasisRenderer,
                table: TableRenderer,
                link: LinkRenderer
              }}
              escapeHtml={false}
            />
          </Block>
        }
      />
    </Block>
  );
};

LegalPageComponent.displayName = "LegalPageComponent";

LegalPageComponent.propTypes = {
  copy: PropTypes.string,
  title: PropTypes.string,
  states: PropTypes.string
};
