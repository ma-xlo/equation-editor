const symbolButtons = [
    {
        button:  document.querySelector('#limit-btn'),
        value: '\\lim_{x \\rightarrow a} f(x) '
    },
    {
        button:  document.querySelector('#integral-btn'),
        value: '\\int_{b}^{a} '
    },
    {
        button: document.querySelector('#productory-btn'),
        value: '\\prod_{i}^{k} '
    },
    {
        button: document.querySelector('#summation-btn'),
        value: '\\sum_{i}^{k} '
    },
    {
        button: document.querySelector('#direct-limit-btn'),
        value: '\\sum_{i}^{k} '
    },
    {
        button: document.querySelector('#var-integral-btn'),
        value: '\\int_{a}^{b} '
    },
    {
        button: document.querySelector('#coproductory-btn'),
        value: '\\coprod '
    },
    {
        button: document.querySelector('#surface-integral-btn'),
        value: '\\iint ',
    },
    {
        button: document.querySelector('#limit-superior-btn'),
        value: '\\varlimsup '
    },
    {
        button: document.querySelector('#volume-integral-btn'),
        value: '\\iiint '
    },
    {
        button: document.querySelector('#limit-inferior-btn'),
        value: '\\varliminf '
    },
    {
        button: document.querySelector('#curve-integral-btn'),
        value: '\\oint '
    },
    {
        button: document.querySelector('#log-btn'),
        value: '\\log_{b}{n} '
    },
    {
        button: document.querySelector('#function-btn'),
        value: 'f(x) '
    },
    {
        button: document.querySelector('#sqrt-btn'),
        value: '\\sqrt{} '
    },
    {
        button: document.querySelector('#fraction-btn'),
        value: '\\frac{a}{b} '
    },    
    {
        button: document.querySelector('#real-number-btn'),
        value: '\\mathbb{R} '
    },
    {
        button: document.querySelector('#complex-number-btn'),
        value: '\\mathbb{C} '
    },
    {
        button: document.querySelector('#natural-number-btn'),
        value: '\\mathbb{N} '
    },
    {
        button: document.querySelector('#rational-number-btn'),
        value: '\\mathbb{Q} '
    },
    {
        button: document.querySelector('#integer-number-btn'),
        value: '\\mathbb{Z} '
    },
    {
        button: document.querySelector('#pi-btn'),
        value: '\\pi '
    },
    {
        button: document.querySelector('#lambda-btn'),
        value: '\\lambda '
    },
    {
        button: document.querySelector('#euler-btn'),
        value: 'e '
    },
    {
        button: document.querySelector('#eistein-gravitational-btn'),
        value: '\\kappa '
    },
    {
        button: document.querySelector('#euler-mascheroni-btn'),
        value: '\\gamma '
    },
    {
        button: document.querySelector('#imaginary-unit-btn'),
        value: '\\mathrm{i} '
    },
    {
        button: document.querySelector('#prouhet-thue-morse-btn'),
        value: '\\tau '
    },
    {
        button: document.querySelector('#ramanujan-soldner-btn'),
        value: '\\mu '
    },

    {
        button: document.querySelector('#somos-quadratic-recurrence-btn'),
        value: '\\sigma '
    },
    {
        button: document.querySelector('#golden-radio-btn'),
        value: '\\phi '
    },
    {
        button: document.querySelector('#infinity-btn'),
        value: '\\infty '
    },
    {
        button: document.querySelector('#thetha-btn'),
        value: '\\theta '
    },
    {
        button: document.querySelector('#vacuum-permittivity-btn'),
        value: '\\epsilon '
    },
    {
        button: document.querySelector('#delta-btn'),
        value: '\\Delta '
    },
    {
        button: document.querySelector('#logical-conjunction-btn'),
        value: '\\land '
    },
    {
        button: document.querySelector('#logical-disjunction-btn'),
        value: '\\lor '
    },
    {
        button: document.querySelector('#logical-equivalence-short-btn'),
        value: '\\Leftrightarrow '
    },
    {
        button: document.querySelector('#logical-equivalence-long-btn'),
        value: '\\iff '
    },
    {
        button: document.querySelector('#contradiction-btn'),
        value: '\\bot '
    },
    {
        button: document.querySelector('#deductive-reasoning-btn'),
        value: '\\therefore '
    },
    {
        button: document.querySelector('#existential-quantification-btn'),
        value: '\\lnot '
    },
    {
        button: document.querySelector('#logical-negation-btn'),
        value: '\\exists '
    },
    {
        button: document.querySelector('#logical-equivalence-single'),
        value: '\\leftrightarrow '
    },
    {
        button: document.querySelector('#short-right-arrow-btn'),
        value: '\\rightarrow '
    }, 
    {
        button: document.querySelector('#long-right-arrow-btn'),
        value: '\\implies '
    },
    {
        button: document.querySelector('#tautology-btn'),
        value: '\\top '
    },
    {
        button: document.querySelector('#uniqueness-quantification-btn'),
        value: '\\exists! '
    },
    {
        button: document.querySelector('#universal-quantification-btn'),
        value: '\\forall '
    },
    {
        button: document.querySelector('#exclusive-or-btn'),
        value: '\\veebar '
    },
    {
        button: document.querySelector('#intersection-small-btn'),
        value: '\\cap '
    },
    {
        button: document.querySelector('#union-small-btn'),
        value: '\\cup '
    },
    {
        button: document.querySelector('#element-of-btn'),
        value: '\\in '
    },
    {
        button: document.querySelector('#not-element-of-btn'),
        value: '\\notin '
    },
    {
        button: document.querySelector('#subset-btn'),
        value: '\\subset ' 
    },
    {
        button: document.querySelector('#not-subset-btn'),
        value: '\\not\\subset '
    },
    {
        button: document.querySelector('#left-arrow-btn'),
        value: '\\leftarrow '
    },
    {
        button: document.querySelector('#right-arrow'),
        value: '\\rightarrow '
    },
    {
        button: document.querySelector('#long-left-arrow-btn'),
        value: '\\longleftarrow '
    },
    {
        button: document.querySelector('#long-right-arrow-btn'),
        value: '\\longrightarrow '
    },
    {
        button: document.querySelector('#lesser-than-btn'),
        value: '\\lt'
    },
    {
        button: document.querySelector('#equality-btn'),
        value: '= '
    },
    {
        button: document.querySelector('#greater-than-btn'),
        value: '> '
    },
    {
        button: document.querySelector('#plus-minus-btn'),
        value: '\\pm '
    },
    {
        button: document.querySelector('#leqslant-btn'),
        value: '\\leq '
    },
    {
        button: document.querySelector('#identity-btn'),
        value: '\\equiv '
    },
    {
        button: document.querySelector('#geqslant-btn'),
        value: '\\geq '
    },
    {
        button: document.querySelector('#lessapprox-btn'),
        value: '\\lessapprox '
    },
    {
        button: document.querySelector('#approximation-btn'),
        value: '\\approx '
    },
    {
        button: document.querySelector('#gtrappox-btn'),
        value: '\\gtrapprox '
    },
    {
        button: document.querySelector('#lessless-btn'),
        value: '\\ll '
    },
    {
        button: document.querySelector('#equivalence-class-btn'),
        value: '\\ll '
    },
    {
        button: document.querySelector('#greater-greater-btn'),
        value: '\\ll '
    },
    {
        button: document.querySelector('#brackets-matrix-btn'),
        value: '\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix} '
    },
    {
        button:  document.querySelector('#braces-matrix-btn'),
        value: '\\begin{Bmatrix}a & b \\\\ c & d\\end{Bmatrix} ',
    },
    {
        button: document.querySelector('#pipes-matrix-btn'),
        value: '\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} '
    },
    {
        button: document.querySelector('#parentheses-matrix-btn'),
        value: '\\begin{vmatrix}a & b \\\\ c & d\\end{vmatrix} '
    },
]

export default symbolButtons