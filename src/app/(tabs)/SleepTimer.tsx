import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SleepTimer() {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    if (selectedTime !== null && timeRemaining !== null) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime !== null && prevTime <= 0) {
            clearInterval(interval);
            setShowButtons(true); 
            return 0;
          }
          return prevTime !== null ? prevTime - 1000 : null;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [selectedTime]);

  const startTimer = (time: number) => {
    setSelectedTime(time);
    setTimeRemaining(time);
    setShowButtons(false); 
  };

  const cancelTimer = () => {
    setSelectedTime(null);
    setTimeRemaining(null);
    setShowButtons(true); 
  };

  const formatTime = (milliseconds: number | null) => {
    if (milliseconds !== null) {
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = parseInt(((milliseconds % 60000) / 1000).toString(), 10);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return '';
  };

  const times = [
    { label: '5 Minutos', value: 5 * 60 * 1000 },
    { label: '10 Minutos', value: 10 * 60 * 1000 },
    { label: '15 Minutos', value: 15 * 60 * 1000 },
    { label: '45 Minutos', value: 45 * 60 * 1000 },
    { label: '60 Minutos', value: 60 * 60 * 1000 },
  ];

  return (
    <View style={[styles.container, { backgroundColor: '#2727d6' }]}>
      {selectedTime !== null ? (
        <View>
          <Text style={styles.timerText}>00:{formatTime(timeRemaining!)}</Text>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={cancelTimer}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {showButtons &&
        times.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => {
              startTimer(time.value);
            }}
          >
            <Text style={styles.buttonText}>{time.label}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 320,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius:12,
    bottom:150
  },
  buttonText: {
    color: 'black',
  },
  timerText: {
    fontSize: 80,
    color:"white",
    bottom:150
  },
  cancelButton: {
    backgroundColor: 'red',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 15,
    bottom:100,
    left:50

  },
  cancelButtonText: {
    color: 'white',
  },
});




