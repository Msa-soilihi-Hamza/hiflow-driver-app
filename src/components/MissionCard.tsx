import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Car, MapPin, Euro, Clock, ChevronRight } from 'lucide-react-native';
import type { Mission } from '../types';
import { colors, spacing, fontSize, radius, shadow } from '../theme';
import StatusBadge from './StatusBadge';

interface MissionCardProps {
  mission: Mission;
  onPress?: () => void;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* Header: Vehicle & Status */}
      <View style={styles.header}>
        <View style={styles.vehicleInfo}>
          <Text style={styles.brandText}>{mission.vehicule.marque}</Text>
          <Text style={styles.modelText}>{mission.vehicule.modele}</Text>
        </View>
        <StatusBadge statut={mission.statut} />
      </View>

      {/* Plate info */}
      <View style={styles.plateRow}>
        <Car size={14} color={colors.mutedText} />
        <Text style={styles.plateText}>{mission.vehicule.immatriculation}</Text>
      </View>

      {/* Timeline Route */}
      <View style={styles.routeContainer}>
        <View style={styles.timeline}>
          <View style={[styles.dot, { backgroundColor: colors.primary }]} />
          <View style={styles.line} />
          <View style={[styles.dot, { backgroundColor: colors.success }]} />
        </View>

        <View style={styles.locations}>
          <View style={styles.locationItem}>
            <Text style={styles.cityText}>{mission.depart.ville}</Text>
            <Text style={styles.addressText} numberOfLines={1}>{mission.depart.adresse}</Text>
          </View>
          <View style={styles.locationItem}>
            <Text style={styles.cityText}>{mission.arrivee.ville}</Text>
            <Text style={styles.addressText} numberOfLines={1}>{mission.arrivee.adresse}</Text>
          </View>
        </View>
      </View>

      {/* Footer: Date, Distance & Remuneration */}
      <View style={styles.footer}>
        <View style={styles.metaInfo}>
          <View style={styles.metaItem}>
            <Clock size={14} color={colors.mutedText} />
            <Text style={styles.metaText}>{mission.date}</Text>
          </View>
          <Text style={styles.separator}>•</Text>
          <Text style={styles.metaText}>{mission.distance} km</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{mission.remuneration.toFixed(0)}€</Text>
          {onPress && <ChevronRight size={18} color={colors.primary} />}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadow.card,
  },
  cardPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  vehicleInfo: {
    flex: 1,
    marginRight: spacing.sm,
  },
  brandText: {
    fontSize: fontSize.sm,
    color: colors.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  modelText: {
    fontSize: fontSize.xl,
    color: colors.text,
    fontWeight: '700',
  },
  plateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    gap: spacing.xs,
  },
  plateText: {
    fontSize: fontSize.sm,
    color: colors.mutedText,
    fontWeight: '500',
  },
  routeContainer: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
  },
  timeline: {
    width: 20,
    alignItems: 'center',
    paddingVertical: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginVertical: 4,
  },
  locations: {
    flex: 1,
    gap: spacing.md,
  },
  locationItem: {
    justifyContent: 'center',
  },
  cityText: {
    fontSize: fontSize.md,
    color: colors.text,
    fontWeight: '600',
  },
  addressText: {
    fontSize: fontSize.sm,
    color: colors.mutedText,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: `${colors.border}50`,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  metaText: {
    fontSize: fontSize.sm,
    color: colors.mutedText,
    fontWeight: '500',
  },
  separator: {
    color: colors.border,
    marginHorizontal: spacing.xs,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  priceText: {
    fontSize: fontSize.lg,
    color: colors.text,
    fontWeight: '800',
  },
});

export default MissionCard;
