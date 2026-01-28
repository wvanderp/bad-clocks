import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["src/**/*.{ts,tsx,js,jsx}"],
        ignores: ["dist", "gitBuild", ".vite", "node_modules"],
        languageOptions: {
            parserOptions: {
                project: ["./tsconfig.json"],
                sourceType: "module"
            }
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "jsx-a11y/anchor-is-valid": "off"
        }
    }
);
