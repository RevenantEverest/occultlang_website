import { useEffect, useCallback } from 'react';
import { useThemeStore } from '@@store/theme';

import { theme as themeUtils } from '@@utils';

function ThemeValidator() {
    const theme = useThemeStore((state) => state.theme);

    const validateTheme = useCallback(() => {
        themeUtils.applyTheme(theme);
    }, [theme])
    
    useEffect(() => {
        validateTheme();
    }, [validateTheme, theme]);

    return null;
};

export default ThemeValidator;