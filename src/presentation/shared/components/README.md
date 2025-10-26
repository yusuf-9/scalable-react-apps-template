# Shared Components

All components use theme CSS variables from `global.css` and support variants through props.

## Components

### 1. Button
**File:** `ui/button/Button.tsx`

**Variants:**
- `primary` (default) - Uses `--color-accent-base`
- `secondary` - Uses `--color-surface-base` with border
- `outline` - Transparent with accent border
- `success` - Uses `--color-success-base`
- `warning` - Uses `--color-warning-base`
- `error` - Uses `--color-error-base`

**Sizes:**
- `sm` - Small button
- `md` (default) - Medium button
- `lg` - Large button

**Usage:**
```tsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="success">Save</Button>
<Button variant="error" disabled>Delete</Button>
```

---

### 2. Card
**File:** `ui/card/Card.tsx`

**Variants:**
- `default` - Uses `--color-surface-base` with `--color-border-base`
- `elevated` - Uses `--shadow-md` and hover effects
- `outlined` - Uses 2px border with accent hover

**Usage:**
```tsx
<Card variant="elevated">
  <h3>Card Title</h3>
  <p>Card content here</p>
</Card>
```

---

### 3. Dialog
**File:** `ui/dialog/Dialog.tsx`

**Props:**
- `isOpen` - Controls visibility
- `onClose` - Close handler
- `title` - Optional header title

**Theme Variables Used:**
- `--color-surface-base` - Dialog background
- `--color-border-base` - Header border
- `--color-text-base` - Title color
- `--shadow-xl` - Dialog shadow

**Usage:**
```tsx
<Dialog isOpen={isOpen} onClose={handleClose} title="My Dialog">
  <p>Dialog content</p>
</Dialog>
```

---

### 4. Title
**File:** `ui/title/Title.tsx`

**Levels:** 1-6 (h1 through h6)

**Variants:**
- `default` - Uses `--color-text-base`
- `accent` - Uses `--color-accent-base`
- `muted` - Uses `--color-text-muted`

**Usage:**
```tsx
<Title level={1} variant="accent">Welcome</Title>
<Title level={2} variant="default">Section Title</Title>
<Title level={3} variant="muted">Subtitle</Title>
```

---

### 5. ThemeSwitcher
**File:** `theme-switcher/ThemeSwitcher.tsx`

**Features:**
- Toggles between light/dark mode
- Saves preference to localStorage
- Updates `data-theme` attribute

**Theme Variables Used:**
- `--color-surface-base` - Button background
- `--color-border-base` - Button border
- `--color-bg-light` - Hover background

**Usage:**
```tsx
<ThemeSwitcher />
```

---

### 6. LoadingFallback
**File:** `ui/loader/LoadingFallback.tsx`

**Theme Variables Used:**
- `--color-text-muted` - Loading text color

**Usage:**
```tsx
<Suspense fallback={<LoadingFallback />}>
  <LazyComponent />
</Suspense>
```

---

## Theme Variables Reference

All components respond to these CSS variables:

### Colors
- `--color-bg-base` - Main background
- `--color-surface-base` - Cards, modals
- `--color-text-base` - Main text
- `--color-text-muted` - Secondary text
- `--color-text-inverse` - Text on dark backgrounds
- `--color-border-base` - Main borders
- `--color-accent-base` - Theme accent color
- `--color-accent-hover` - Accent hover state
- `--color-accent-disabled` - Disabled accent
- `--color-success-base` - Success green
- `--color-warning-base` - Warning orange
- `--color-error-base` - Error red

### Spacing
- `--spacing-xs` through `--spacing-xl`

### Typography
- `--font-size-xs` through `--font-size-xl`
- `--font-primary` - Body font (Inter)
- `--font-secondary` - Heading font (Poppins)

### Borders
- `--border-radius-sm` through `--border-radius-full`

### Shadows
- `--shadow-sm` through `--shadow-2xl`

---

## Changing Themes

### Light/Dark Mode
```javascript
document.documentElement.dataset.theme = "dark"; // or "light"
```

### Color Themes
```javascript
document.documentElement.dataset.themeColor = "purple"; // or "green", "teal"
```

All components will automatically adapt to the new theme!

