export const colors = {
  primary: '#2563EB',     // Blue
  background: '#F8FAFC',
  text: '#1E293B',
  mutedText: '#64748B',
  card: '#FFFFFF',
  border: '#E2E8F0',
  success: '#10B981',     // Green
  warning: '#F59E0B',     // Orange
  danger: '#EF4444',      // Red (added for error testing)
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

