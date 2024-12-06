import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {tambah, kurang, bagi, kali} from './src';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [angka1, setAngka1] = useState<string>('');
  const [angka2, setAngka2] = useState<string>('');
  const [hasil, setHasil] = useState<number | string>(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  const tekanTambah = () => {
    const jumlah = tambah(parseInt(angka1), parseInt(angka2));
    setHasil(jumlah);
  };

  const tekanKurang = () => {
    const selisih = kurang(parseInt(angka1), parseInt(angka2));
    setHasil(selisih);
  };

  const tekanBagi = () => {
    const hasilBagi = bagi(parseInt(angka1), parseInt(angka2));
    setHasil(hasilBagi);
  };

  const tekanKali = () => {
    const hasilKali = kali(parseInt(angka1), parseInt(angka2));
    setHasil(hasilKali);
  };

  const isInvalidInput = (): boolean => {
    if (
      !angka1 ||
      !angka2 ||
      isNaN(parseInt(angka1)) ||
      isNaN(parseInt(angka2))
    ) {
      // alert('Masukkan angka yang valid!');
      return true;
    }
    return false;
  };

  const CustomButton = ({
    title,
    onPress,
  }: {
    title: string;
    onPress: () => void;
  }) => (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter}>{`Count : ${count}`}</Text>
      <CustomButton title="Increment" onPress={increment} />
      <CustomButton title="Decrement" onPress={decrement} />

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 1"
        onChangeText={text => setAngka1(text)}
        value={angka1}
        style={styles.input}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 2"
        onChangeText={text => setAngka2(text)}
        value={angka2}
        style={styles.input}
      />

      <CustomButton title="Tambah" onPress={tekanTambah} />
      <CustomButton title="Kurang" onPress={tekanKurang} />
      <CustomButton title="Bagi" onPress={tekanBagi} />
      <CustomButton title="Kali" onPress={tekanKali} />

      <Text style={styles.textCenter}>Hasil : {hasil}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textCenter: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
