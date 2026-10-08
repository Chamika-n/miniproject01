import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

function Avatar() {
  return (
    <View style={styles.avatar}>
      <View style={styles.avatarRing} />
      <View style={styles.hairBack} />
      <View style={styles.earLeft} />
      <View style={styles.earRight} />
      <View style={styles.face}>
        <View style={styles.hair} />
        <View style={styles.glassesRow}>
          <View style={styles.glass} />
          <View style={styles.glassesBridge} />
          <View style={styles.glass} />
        </View>
        <View style={styles.nose} />
        <View style={styles.mouth} />
      </View>
      <View style={styles.neck} />
      <View style={styles.shirt} />
      <View style={styles.verifiedMark}>
        <View style={styles.checkShort} />
        <View style={styles.checkLong} />
      </View>
    </View>
  );
}

function ProfileField({ label, children }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.content}>
        <Image
        source={require('./assets/profile.png')}
        style={styles.profilePhoto}
        />

        <View style={styles.divider} />

        <ProfileField label="Name">
          <Text style={styles.value}>Diluka</Text>
        </ProfileField>

        <ProfileField label="Email">
          <View style={styles.emailLine}>
            <Text style={styles.mailIcon}>✉</Text>
            <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
          </View>
        </ProfileField>

        <ProfileField label="Points">
          <View style={styles.pointsLine}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.value}>{points}</Text>
          </View>
        </ProfileField>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Add one point"
        onPress={() => setPoints((currentPoints) => currentPoints + 1)}
        style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
      >
        <Text style={styles.fabIcon}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#000000' },
  header: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  headerTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 17,
    paddingTop: 13,
  },

  profilePhoto: {
    width: 104,
    height: 104,
    borderRadius: 52,
    alignSelf: 'center', 
    resizeMode: 'cover',
  },

  avatar: {
    width: 104,
    height: 104,
    alignSelf: 'center',
    position: 'relative',
    overflow: 'visible',
  },
  avatarRing: {
    position: 'absolute',
    inset: 1,
    borderWidth: 1,
    borderColor: '#F4B7BE',
    borderRadius: 52,
    backgroundColor: '#FCFCFC',
  },
  hairBack: {
    position: 'absolute',
    width: 41,
    height: 54,
    borderRadius: 20,
    backgroundColor: '#26282B',
    left: 31,
    top: 21,
  },
  earLeft: {
    position: 'absolute',
    width: 8,
    height: 14,
    borderRadius: 5,
    backgroundColor: '#F8D5CC',
    left: 29,
    top: 48,
  },
  earRight: {
    position: 'absolute',
    width: 8,
    height: 14,
    borderRadius: 5,
    backgroundColor: '#F8D5CC',
    right: 28,
    top: 48,
  },
  face: {
    position: 'absolute',
    width: 36,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#FFDDD3',
    left: 34,
    top: 31,
    alignItems: 'center',
  },
  hair: {
    position: 'absolute',
    width: 38,
    height: 18,
    top: -4,
    left: -1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#25272A',
    transform: [{ rotate: '-5deg' }],
  },
  glassesRow: {
    position: 'absolute',
    top: 15,
    width: 42,
    left: -3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glass: {
    width: 16,
    height: 11,
    borderWidth: 1.7,
    borderColor: '#252525',
    borderRadius: 3,
  },
  glassesBridge: { width: 4, height: 2, backgroundColor: '#252525' },
  nose: {
    position: 'absolute',
    top: 25,
    width: 4,
    height: 4,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#8D655D',
    transform: [{ rotate: '45deg' }],
  },
  mouth: {
    position: 'absolute',
    bottom: 7,
    width: 12,
    height: 5,
    borderBottomWidth: 1.5,
    borderColor: '#8A5B58',
    borderRadius: 8,
  },
  neck: {
    position: 'absolute',
    width: 13,
    height: 12,
    backgroundColor: '#F5CEC2',
    left: 45.5,
    top: 69,
    zIndex: 1,
  },
  shirt: {
    position: 'absolute',
    width: 54,
    height: 29,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    backgroundColor: '#373333',
    left: 25,
    top: 77,
  },
  verifiedMark: {
    position: 'absolute',
    width: 35,
    height: 35,
    right: 7,
    bottom: 12,
    transform: [{ rotate: '-45deg' }],
  },
  checkShort: {
    position: 'absolute',
    width: 13,
    height: 6,
    borderLeftWidth: 6,
    borderBottomWidth: 6,
    borderColor: '#00D639',
    left: 1,
    top: 15,
  },
  checkLong: {
    position: 'absolute',
    width: 27,
    height: 6,
    borderBottomWidth: 6,
    borderColor: '#00D639',
    left: 10,
    top: 12,
  },
  divider: {
    height: 1.5,
    width: '100%',
    backgroundColor: '#252525',
    marginTop: 7,
    marginBottom: 14,
  },
  field: { marginBottom: 16 },
  label: { color: '#161616', fontSize: 14, fontWeight: '700', marginBottom: 4 },
  value: { color: '#363636', fontSize: 15, fontWeight: '400' },
  emailLine: { flexDirection: 'row', alignItems: 'center' },
  mailIcon: { fontSize: 17, color: '#111111', marginRight: 8, marginTop: -1 },
  pointsLine: { flexDirection: 'row', alignItems: 'center' },
  star: { color: '#101010', fontSize: 17, marginRight: 9, lineHeight: 19 },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000000',
    shadowOpacity: 0.28,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  fabPressed: { opacity: 0.75, transform: [{ scale: 0.96 }] },
  fabIcon: { color: '#FFFFFF', fontSize: 29, fontWeight: '300', marginTop: -3 },
});
