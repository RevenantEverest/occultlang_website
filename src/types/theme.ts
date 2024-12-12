export interface ThemeColors {
    primary: string,
    secondary: string,
    accent: string,
    background: string,

    text: string,
    muted: string,
    accentText: string,

    card: string
};

export type MappedThemeKeys = (
    "--color-primary" |
    "--color-secondary" |
    "--color-accent" |

    "--color-text" |
    "--color-muted" |
    "--color-text-accent" |

    "--color-card" |

    "--background"
); 

export type MappedTheme = Record<MappedThemeKeys, string>;
export type ThemeName = string;

export interface Theme {
    name: ThemeName,
    colors: ThemeColors
};