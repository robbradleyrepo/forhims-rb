const notOnPrimary = {
  left: {
    desktop: false,
    mobile: false
  },
  right: {
    desktop: false,
    mobile: false
  }
};

const allOnPrimary = {
  left: {
    desktop: true,
    mobile: true
  },
  right: {
    desktop: true,
    mobile: true
  }
};

const rightNotOnPrimaryDesktop = {
  left: {
    desktop: true,
    mobile: true
  },
  right: {
    desktop: false,
    mobile: true
  }
};

const leftOnPrimary = {
  left: {
    desktop: true,
    mobile: true
  },
  right: {
    desktop: false,
    mobile: false
  }
};

const rightOnPrimary = {
  left: {
    desktop: false,
    mobile: false
  },
  right: {
    desktop: true,
    mobile: true
  }
};

export const globalNavLinkStyles = {
  pdp: rightNotOnPrimaryDesktop,
  homepage: leftOnPrimary,
  profile: notOnPrimary,
  confirmation: notOnPrimary,
  leftDrawerOpen: leftOnPrimary,
  rightDrawerOpen: rightOnPrimary,
  treatment: notOnPrimary,
  default: notOnPrimary,
  legalPages: allOnPrimary
};
