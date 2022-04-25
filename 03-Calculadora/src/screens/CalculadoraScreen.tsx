import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import ButtonCalculator from '../components/ButtonCalculator';
import {UseCalculadora} from '../hooks/useCalculator';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    limpiar,
    removeNumber,
    postiveNegative,
    btnDivide,
    armarNumero,
    btnSubtract,
    btnAdd,
    calculate,
  } = UseCalculadora();
  return (
    <View style={styles.calculatorContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.litleResult}>{numeroAnterior}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9B9B9B" accion={limpiar} />
        <ButtonCalculator text="+/-" color="#9B9B9B" accion={postiveNegative} />
        <ButtonCalculator text="del" color="#9B9B9B" accion={removeNumber} />
        <ButtonCalculator text="/" color="#FF9427" accion={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="7" accion={armarNumero} />
        <ButtonCalculator text="8" accion={armarNumero} />
        <ButtonCalculator text="9" accion={armarNumero} />
        <ButtonCalculator text="x" color="#FF9427" accion={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="4" accion={armarNumero} />
        <ButtonCalculator text="5" accion={armarNumero} />
        <ButtonCalculator text="6" accion={armarNumero} />
        <ButtonCalculator text="-" color="#FF9427" accion={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="1" accion={armarNumero} />
        <ButtonCalculator text="2" accion={armarNumero} />
        <ButtonCalculator text="3" accion={armarNumero} />
        <ButtonCalculator text="+" color="#FF9427" accion={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="0" accion={armarNumero} ancho />
        <ButtonCalculator text="." accion={armarNumero} />
        <ButtonCalculator text="=" color="#FF9427" accion={calculate} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
