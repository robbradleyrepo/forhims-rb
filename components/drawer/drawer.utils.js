import { equals } from "ramda";

import { DRAWER_POSITIONS, DRAWER_STATES } from "../../constants/ui";

export const isLeft = equals(DRAWER_POSITIONS.LEFT);
export const isRight = equals(DRAWER_POSITIONS.RIGHT);
export const isOpen = equals(DRAWER_STATES.FULL);
