import { storiesOf } from "@storybook/react";
import { object, text } from "@storybook/addon-knobs/react";
import React from "react";

import { Footer } from "./footer.component";
import { ListWithTitle } from "./list-with-title.component";
import { CollapsibleListWithTitle } from "./collapsible-list-with-title.component";

storiesOf("Components|Footer", module)
  .add("Footer", () => {
    const copyright = text(
      "Copyright",
      "Copyright 2018 HIMS. All rights reserved."
    );

    const legalLinks = object("Legal Links", [
      { url: "/user-terms", label: "User Terms." },
      { url: "/service-terms", label: "Service Terms." },
      { url: "/privacy-policy", label: "Privacy Policy." }
    ]);

    const iconLinks = object("Icon Links", [
      {
        icon: "facebook",
        url: "http://www.facebook.com"
      },
      {
        icon: "twitter",
        url: "http://www.twitter.com"
      },
      {
        icon: "instagram",
        url: "http://www.instagram.com"
      }
    ]);

    const columns = object("Columns", [
      [
        {
          title: "Have a question?",
          items: [
            {
              url: "mailto:support@forhims.co.uk",
              label: "support@forhims.co.uk"
            }
          ]
        },
        {
          title: "Press inquiries?",
          items: [
            {
              url: "mailto:press@forhims.co.uk",
              label: "press@forhims.co.uk"
            }
          ]
        }
      ],
      [
        {
          title: "Learn",
          isCollapsible: true,
          items: [
            {
              url: "/blog",
              label: "Savoir Faire"
            },
            {
              url: "/about",
              label: "About Us"
            }
          ]
        }
      ],
      [
        // {
        //   title: 'Guides',
        //   isCollapsible: true,
        //   items: [
        //      { url: "https://support.forhims.com/hc/en-us", label: "Help" }
        //      { url: '/treatment', label: 'Treatment Plans' },
        //   ],
        // },
      ]
    ]);

    return (
      <Footer
        columns={columns}
        copyright={copyright}
        iconLinks={iconLinks}
        legalLinks={legalLinks}
      />
    );
  })
  .add("List with title", () => {
    const title = text("Title", "learn");
    const items = object("items", [
      { url: "/blog", label: "savoir vivre" },
      { url: "/the-science", label: "the science" },
      { url: "/purpose", label: "purpose" },
      { url: "/about", label: "about us" }
    ]);

    return <ListWithTitle title={title} items={items} />;
  })
  .add("Collapsible List with title", () => {
    const title = text("Title", "learn");
    const items = object("items", [
      { url: "/blog", label: "savoir vivre" },
      { url: "/the-science", label: "the science" },
      { url: "/purpose", label: "purpose" },
      { url: "/about", label: "about us" }
    ]);

    return (
      <React.Fragment>
        <CollapsibleListWithTitle title={title} items={items} />
      </React.Fragment>
    );
  });
