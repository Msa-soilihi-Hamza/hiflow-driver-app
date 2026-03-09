import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem, Pressable } from 'react-native';
import { colors, spacing, fontSize, radius } from '../theme';
import type { Mission } from '../types';
import MissionCard from '../components/MissionCard';
import EmptyState from '../components/EmptyState';
import { MissionsContext } from '../context/MissionsContext';

const MyMissionsScreen: React.FC = () => {
  const missionsContext = useContext(MissionsContext);

  if (!missionsContext) {
    return null;
  }

  const { missions, acceptedMissionIds, markMissionAsDelivered } = missionsContext;

  const acceptedMissions = useMemo(
    () => missions.filter((mission) => acceptedMissionIds.includes(mission.id)),
    [missions, acceptedMissionIds],
  );

  const renderItem: ListRenderItem<Mission> = ({ item }) => (
    <View style={styles.itemWrapper}>
      <MissionCard mission={item} />
      {item.statut !== 'livree' && (
        <Pressable
          style={styles.deliverButton}
          onPress={() => markMissionAsDelivered(item.id)}
        >
          <Text style={styles.deliverButtonText}>Marquer comme livrée</Text>
        </Pressable>
      )}
    </View>
  );

  if (acceptedMissions.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <EmptyState
          title="Aucune mission acceptée"
          description="Acceptez une mission pour la voir apparaître ici."
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes missions</Text>
      <FlatList
        data={acceptedMissions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    fontSize: fontSize.xxl,
    color: colors.text,
    fontWeight: '600',
    marginBottom: spacing.md,
  },
  listContent: {
    paddingBottom: spacing.lg,
  },
  itemWrapper: {
    marginBottom: spacing.md,
  },
  deliverButton: {
    marginTop: spacing.xs,
    paddingVertical: spacing.sm,
    borderRadius: radius.sm,
    backgroundColor: colors.success,
    alignItems: 'center',
  },
  deliverButtonText: {
    fontSize: fontSize.sm,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default MyMissionsScreen;

