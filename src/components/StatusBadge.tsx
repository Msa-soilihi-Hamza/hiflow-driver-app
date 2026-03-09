import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { MissionStatus } from '../types';
import { colors, spacing, fontSize, radius } from '../theme';

interface StatusBadgeProps {
  statut: MissionStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ statut }) => {
  const { label, backgroundColor, textColor } = getStatusStyle(statut);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </View>
  );
};

function getStatusStyle(statut: MissionStatus) {
  const stylesConfig = {
    disponible: {
      label: 'Disponible',
      backgroundColor: `${colors.primary}15`, // 15 is approx 8% opacity in hex
      textColor: colors.primary,
    },
    en_cours: {
      label: 'En cours',
      backgroundColor: `${colors.warning}1A`, // 1A is approx 10% opacity in hex
      textColor: colors.warning,
    },
    livree: {
      label: 'Livrée',
      backgroundColor: `${colors.success}1A`,
      textColor: colors.success,
    },
  };

  return stylesConfig[statut] || {
    label: statut,
    backgroundColor: `${colors.mutedText}26`, // 26 is approx 15% opacity
    textColor: colors.mutedText,
  };
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.lg,
  },
  text: {
    fontSize: fontSize.sm,
    fontWeight: '500',
  },
});

export default StatusBadge;

