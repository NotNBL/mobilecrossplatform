import { Button, Text, View, StyleSheet } from "react-native";

interface iCounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handlePassValue: () => void;
  value: number;
}

const Counter = ({ handleIncrement, handleDecrement, handlePassValue, value }: iCounter) => {
  
  const checkAndDecrement = () => {
    if (value > 0) {
      handleDecrement();
    } else {
      console.log("Batas tercapai: Nilai tidak bisa kurang dari 0");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <Button title="INCREMENT" onPress={handleIncrement} />
      
      <Button 
        title="DECREMENT" 
        onPress={checkAndDecrement} 
        disabled={value <= 0} 
      />
      
      <Button title="PASS VALUE" onPress={handlePassValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, gap: 5 },
  text: { fontSize: 20, textAlign: 'center' }
});

export default Counter;