import React, { useContext, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors, spacing, fontSize } from '../theme';
import type { Mission } from '../types';
import MissionCard from '../components/MissionCard';
import EmptyState from '../components/EmptyState';
import type { RootStackParamList } from '../navigation/types';
import { MissionsContext } from '../context/MissionsContext';

type Props = NativeStackScreenProps<RootStackParamList, 'MissionsList'>;

const MissionsListScreen: React.FC<Props> = ({ navigation }) => {
  const missionsContext = useContext(MissionsContext);

  if (!missionsContext) {
    return null;
  }

  const { missions } = missionsContext;

  const availableMissions = useMemo(
    () => missions.filter((mission) => mission.statut === 'disponible'),
    [missions],
  );

  const renderItem: ListRenderItem<Mission> = ({ item }) => (
    <MissionCard
      mission={item}
      onPress={() => navigation.navigate('MissionDetail', { missionId: item.id })}
    />
  );

  if (availableMissions.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <EmptyState
          title="Aucune mission disponible"
          description="Revenez plus tard, de nouvelles missions arriveront bientôt."
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missions disponibles</Text>
      <FlatList
        data={availableMissions}
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
});

export default MissionsListScreen;

