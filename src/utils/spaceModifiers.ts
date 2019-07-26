/**
 * Where property is one of:
 *
 *    *m - for classes that set margin
 *    *p - for classes that set padding
 * ------------------------------------------------------
 * Where sides is one of:
 *
 *    *t - for classes that set margin-top or padding-top
 *    *b - for classes that set margin-bottom or padding-bottom
 *    *l - for classes that set margin-left or padding-left
 *    *r - for classes that set margin-right or padding-right
 *    *x - for classes that set both *-left and *-right
 *    *y - for classes that set both *-top and *-bottom
 */

const spaceReducer = (
    property: string,
    att1: string,
    att2?: string
) =>
    [ 0, 1, 1.5, 2, 3, 4, 5, 6 ].reduce((acc, cur) => ({
        ...acc,
        [property + cur]: () => `${att1}: ${cur * 10}px; ${att2 ? `${att2}: ${cur * 10}px;` : ''}`,
    }), {})

// TODO: need find out how make TS determinate generated keys as type
//       for 'MODIFIER_MARGIN_CONFIG' and 'MODIFIER_PADDING_CONFIG'

type MMK = 'mAuto' |
'mT_0' | 'mT_1' | 'mT_1.5' | 'mT_2' | 'mT_3' | 'mT_4' | 'mT_5' | 'mT_6' |
'mB_0' | 'mB_1' | 'mB_1.5' | 'mB_2' | 'mB_3' | 'mB_4' | 'mB_5' | 'mB_6' |
'mL_0' | 'mL_1' | 'mL_1.5' | 'mL_2' | 'mL_3' | 'mL_4' | 'mL_5' | 'mL_6' |
'mR_0' | 'mR_1' | 'mR_1.5' | 'mR_2' | 'mR_3' | 'mR_4' | 'mR_5' | 'mR_6' |
'mX_0' | 'mX_1' | 'mX_1.5' | 'mX_2' | 'mX_3' | 'mX_4' | 'mX_5' | 'mX_6' |
'mY_0' | 'mY_1' | 'mY_1.5' | 'mY_2' | 'mY_3' | 'mY_4' | 'mY_5' | 'mY_6' |
'm_0'  | 'm_1'  | 'm_1.5'  | 'm_2'  | 'm_3'  | 'm_4'  | 'm_5'  | 'm_6'

export const MODIFIER_MARGIN_CONFIG: Partial<Record<MMK, () => string>> = {
    ...spaceReducer('mT_', 'margin-top'),
    ...spaceReducer('mB_', 'margin-bottom'),
    ...spaceReducer('mL_', 'margin-left'),
    ...spaceReducer('mR_', 'margin-right'),
    ...spaceReducer('m_', 'margin'),
    ...spaceReducer('mX_', 'margin-right', 'margin-left'),
    ...spaceReducer('mY_', 'margin-top', 'margin-bottom'),
    mAuto: () => 'margin: auto;',
}

type PMK =
    'pT_0' | 'pT_1' | 'pT_1.5' | 'pT_2' | 'pT_3' | 'pT_4' | 'pT_5' | 'pT_6' |
    'pB_0' | 'pB_1' | 'pB_1.5' | 'pB_2' | 'pB_3' | 'pB_4' | 'pB_5' | 'pB_6' |
    'pL_0' | 'pL_1' | 'pL_1.5' | 'pL_2' | 'pL_3' | 'pL_4' | 'pL_5' | 'pL_6' |
    'pR_0' | 'pR_1' | 'pR_1.5' | 'pR_2' | 'pR_3' | 'pR_4' | 'pR_5' | 'pR_6' |
    'pX_0' | 'pX_1' | 'pX_1.5' | 'pX_2' | 'pX_3' | 'pX_4' | 'pX_5' | 'pX_6' |
    'pY_0' | 'pY_1' | 'pY_1.5' | 'pY_2' | 'pY_3' | 'pY_4' | 'pY_5' | 'pY_6' |
    'p_0'  | 'p_1'  | 'p_1.5'  | 'p_2'  | 'p_3'  | 'p_4'  | 'p_5'  | 'p_6'

export const MODIFIER_PADDING_CONFIG: Partial<Record<PMK, () => string>> = {
    ...spaceReducer('pT_', 'padding-top'),
    ...spaceReducer('pB_', 'padding-bottom'),
    ...spaceReducer('pL_', 'padding-left'),
    ...spaceReducer('pR_', 'padding-right'),
    ...spaceReducer('p_', 'padding'),
    ...spaceReducer('pX_', 'padding-right', 'padding-left'),
    ...spaceReducer('pY_', 'padding-top', 'padding-bottom'),
}
