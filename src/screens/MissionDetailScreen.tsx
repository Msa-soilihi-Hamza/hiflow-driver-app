import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Car, MapPin, Euro, Clock } from 'lucide-react-native';
import { colors, spacing, fontSize, radius } from '../theme';
import type { Mission } from '../types';
import StatusBadge from '../components/StatusBadge';
import type { RootStackParamList } from '../navigation/types';
import { MissionsContext } from '../context/MissionsContext';

type Props = NativeStackScreenProps<RootStackParamList, 'MissionDetail'>;

const MissionDetailScreen: React.FC<Props> = ({ route }) => {
  const missionsContext = useContext(MissionsContext);

  if (!missionsContext) {
    return null;
  }

  const { missions, acceptMission } = missionsContext;

  const mission: Mission | undefined = useMemo(
    () => missions.find((m) => m.id === route.params.missionId),
    [missions, route.params.missionId],
  );

  if (!mission) {
    return (
      <View style={styles.missingContainer}>
        <Text style={styles.missingText}>Cette mission n'existe plus.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {mission.vehicule.marque} {mission.vehicule.modele}
        </Text>
        <StatusBadge statut={mission.statut} />
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Car size={18} color={colors.mutedText} />
          <Text style={styles.plateText}>{mission.vehicule.immatriculation}</Text>
        </View>
        <View style={styles.row}>
          <Clock size={18} color={colors.mutedText} />
          <Text style={styles.metaText}>{mission.date}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trajet</Text>
        <View style={styles.routeBlock}>
          <View style={styles.row}>
            <MapPin size={18} color={colors.primary} />
            <Text style={styles.cityText}>{mission.depart.ville}</Text>
          </View>
          <Text style={styles.addressText}>{mission.depart.adresse}</Text>
        </View>
        <View style={styles.routeBlock}>
          <View style={styles.row}>
            <MapPin size={18} color={colors.success} />
            <Text style={styles.cityText}>{mission.arrivee.ville}</Text>
          </View>
          <Text style={styles.addressText}>{mission.arrivee.adresse}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rémunération</Text>
        <View style={styles.row}>
          <Euro size={18} color={colors.primary} />
          <Text style={styles.priceText}>{mission.remuneration.toFixed(0)} €</Text>
          <Text style={styles.metaText}> • {mission.distance} km</Text>
        </View>
      </View>

      <Pressable style={styles.ctaButton} onPress={() => acceptMission(mission.id)}>
        <Text style={styles.ctaText}>Accepter la mission</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  missingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  missingText: {
    fontSize: fontSize.md,
    color: colors.mutedText,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: fontSize.xxl,
    color: colors.text,
    fontWeight: '700',
    flex: 1,
    marginRight: spacing.md,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.sm,
  },
  routeBlock: {
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  plateText: {
    fontSize: fontSize.md,
    color: colors.mutedText,
    marginLeft: spacing.xs,
  },
  metaText: {
    fontSize: fontSize.sm,
    color: colors.mutedText,
    marginLeft: spacing.xs,
  },
  cityText: {
    fontSize: fontSize.md,
    color: colors.text,
    fontWeight: '500',
    marginLeft: spacing.xs,
  },
  addressText: {
    fontSize: fontSize.sm,
    color: colors.mutedText,
    marginLeft: spacing.lg,
  },
  priceText: {
    fontSize: fontSize.lg,
    color: colors.primary,
    fontWeight: '600',
    marginLeft: spacing.xs,
  },
  ctaButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: fontSize.lg,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default MissionDetailScreen;

