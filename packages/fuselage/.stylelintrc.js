module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  ignoreFiles: ['src/**/*.js'],
  rules: {
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-before': 'never-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-space-after': 'never-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'stylelint-commands',
        ],
      },
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates-with-different-values',
        ],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'font-family-no-duplicate-names': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-whitespace-after': 'always',
    indentation: 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'rule-empty-line-before': [
      'always',
      {
        except: [
          'first-nested',
        ],
        ignore: [
          'after-comment',
        ],
      },
    ],
    'scss/at-mixin-pattern': '^-?([a-z][a-z0-9]+-)*[a-z][a-z0-9]+$',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/dollar-variable-pattern': '^-?([a-z][a-z0-9]+-)*[a-z][a-z0-9]+$',
    'scss/no-duplicate-mixins': true,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
        ],
      },
    ],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 1,
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'inset',
            'inset-block',
            'inset-block-start',
            'inset-block-end',
            'inset-inline',
            'inset-inline-start',
            'inset-inline-end',
            'z-index',
          ],
        },
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'display',
            'visibility',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clip',
            'zoom',
            'flex-flow',
            'flex-direction',
            'flex-wrap',
            'justify-content',
            'align-items',
            'align-content',
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'align-self',
            'order',
          ],
        },
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'block-size',
            'min-block-size',
            'max-block-size',
            'inline-size',
            'min-inline-size',
            'max-inline-size',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-block',
            'margin-block-start',
            'margin-block-end',
            'margin-inline',
            'margin-inline-start',
            'margin-inline-end',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'padding-block',
            'padding-block-start',
            'padding-block-end',
            'padding-inline',
            'padding-inline-start',
            'padding-inline-end',
          ],
        },
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'table-layout',
            'empty-cells',
            'caption-side',
            'border-spacing',
            'border-collapse',
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
          ],
        },
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'content',
            'quotes',
            'counter-reset',
            'counter-increment',
            'resize',
            'cursor',
            'user-select',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'transform',
            'transform-origin',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'text-align',
            'text-align-last',
            'vertical-align',
            'white-space',
            'text-decoration',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-indent',
            'text-justify',
            'text-transform',
            'letter-spacing',
            'word-spacing',
            'text-outline',
            'text-transform',
            'text-wrap',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'word-wrap',
            'word-break',
            'tab-size',
            'hyphens',
            'pointer-events',
          ],
        },
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'opacity',
            'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
            'color',
            'border',
            'border-collapse',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-width',
            'border-left-style',
            'border-left-color',
            'border-block',
            'border-block-start',
            'border-block-end',
            'border-inline',
            'border-inline-start',
            'border-inline-end',
            'border-block-width',
            'border-block-start-width',
            'border-block-end-width',
            'border-inline-width',
            'border-inline-start-width',
            'border-inline-end-width',
            'border-block-style',
            'border-block-start-style',
            'border-block-end-style',
            'border-inline-style',
            'border-inline-start-style',
            'border-inline-end-style',
            'border-block-color',
            'border-block-start-color',
            'border-block-end-color',
            'border-inline-color',
            'border-inline-start-color',
            'border-inline-end-color',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
            'border-start-start-radius',
            'border-start-end-radius',
            'border-end-start-radius',
            'border-end-end-radius',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'background',
            'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
            'background-color',
            'background-image',
            'background-repeat',
            'background-attachment',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size',
            'box-decoration-break',
            'box-shadow',
            'filter:progid:DXImageTransform.Microsoft.gradient',
            'text-shadow',
          ],
        },
        {
          emptyLineBefore: 'always',
          order: 'strict',
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-variant',
            'font-variant-ligatures',
            'font-variant-numeric',
            'font-variant-caps',
            'font-variant-east-asian',
            'font-variant-alternates',
            'font-variant-position',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-smooth',
            'line-height',
          ],
        },
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};