export const colors = {
  primary: '#2563EB',
  background: '#F8FAFC',
  text: '#0F172A',
  mutedText: '#64748B',
  card: '#FFFFFF',
  border: '#E2E8F0',
  success: '#16A34A',
  warning: '#F97316',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const fontSize = {
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
} as const;

export const shadow = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
} as const;

