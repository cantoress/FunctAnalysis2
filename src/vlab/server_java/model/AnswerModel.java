package vlab.server_java.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.*;

public class AnswerModel {

    private static final int HISTOGRAM_INTERVAL = 50;

    //Изначальный список данных - ненормированные данные
    private List<Double> originalVariant;

    //Значения после фурье-преобразования
    //private transient List<Complex> fourieValues;
    //Значения частот для фурье-преобразования
    private List<Double> fourieFrequencies;

    //Значения мощностей для каждого значения
    private List<Double> powerValues;

    //Мощности отдельных спектров, плюс минимумы и максимумы мощностей в каждом из спектров
    private Double HF, LF, VLF;

    //Абсолютный уровень активности регуляторных систем
    private Double TP;
    //Процентное отношение к абсолюту
    private Double HFp, LFp, VLFp;
    //Выводы о нахождении в норме/вне нормы
    private String HFpDescription, LFpDescription, VLFpDescription;

    //Индекс централизации, индекс вагосимпатического взаимодействия, индекс активации подкорковых нервных центров соответственно
    private Double IC, IVV, ISCA;

    //Вывод о типе регуляции ВНС - по индексу напряжения и мощностям спектров
    private String VNSRegulationDescription;

    public AnswerModel() {
    }

    public AnswerModel(List<String> originalVariant) {

        List<Double> doubleCode = new ArrayList<>();
        for (String str : originalVariant) {
            doubleCode.add(Double.parseDouble(str));
        }
        this.originalVariant = doubleCode;
    }

    public AnswerModel(Double HF, Double LF, Double VLF, Double TP, Double HFp, Double LFp, Double VLFp, String HFpDescription, String LFpDescription, String VLFpDescription, Double IC, Double IVV, Double ISCA, String VNSRegulationDescription) {
        this.HF = HF;
        this.LF = LF;
        this.VLF = VLF;
        this.TP = TP;
        this.HFp = HFp;
        this.LFp = LFp;
        this.VLFp = VLFp;
        this.HFpDescription = HFpDescription;
        this.LFpDescription = LFpDescription;
        this.VLFpDescription = VLFpDescription;
        this.IC = IC;
        this.IVV = IVV;
        this.ISCA = ISCA;
        this.VNSRegulationDescription = VNSRegulationDescription;
    }

    public AnswerModel(List<Double> fourieFrequencies, List<Double> powerValues, Double HF, Double LF, Double VLF, Double TP, Double HFp, Double LFp, Double VLFp, String HFpDescription, String LFpDescription, String VLFpDescription, Double IC, Double IVV, Double ISCA, String VNSRegulationDescription) {
        this.fourieFrequencies = fourieFrequencies;
        this.powerValues = powerValues;
        this.HF = HF;
        this.LF = LF;
        this.VLF = VLF;
        this.TP = TP;
        this.HFp = HFp;
        this.LFp = LFp;
        this.VLFp = VLFp;
        this.HFpDescription = HFpDescription;
        this.LFpDescription = LFpDescription;
        this.VLFpDescription = VLFpDescription;
        this.IC = IC;
        this.IVV = IVV;
        this.ISCA = ISCA;
        this.VNSRegulationDescription = VNSRegulationDescription;
    }

    public AnswerModel(List<String> originalVariant, List<Double> fourieFrequencies, List<Double> powerValues, Double HF, Double LF, Double VLF, Double TP, Double HFp, Double LFp, Double VLFp, String HFpDescription, String LFpDescription, String VLFpDescription, Double IC, Double IVV, Double ISCA, String VNSRegulationDescription) {
        List<Double> doubleCode = new ArrayList<>();
        for (String str : originalVariant) {
            doubleCode.add(Double.parseDouble(str));
        }
        this.originalVariant = doubleCode;

        //this.fourieValues = fourieValues;
        this.fourieFrequencies = fourieFrequencies;
        this.powerValues = powerValues;
        this.HF = HF;

        this.LF = LF;

        this.VLF = VLF;

        this.TP = TP;
        this.HFp = HFp;
        this.LFp = LFp;
        this.VLFp = VLFp;
        this.HFpDescription = HFpDescription;
        this.LFpDescription = LFpDescription;
        this.VLFpDescription = VLFpDescription;
        this.IC = IC;
        this.IVV = IVV;
        this.ISCA = ISCA;
        this.VNSRegulationDescription = VNSRegulationDescription;
    }

    @Override
    public String toString() {
        return "AnswerModel{" +
                //"fourieValues=" + fourieValues + "\n" +
                ", fourieFrequencies=" + fourieFrequencies + "\n" +
                ", powerValues=" + powerValues + "\n" +
                ", HF=" + HF + "\n" +
                ", LF=" + LF + "\n" +
                ", VLF=" + VLF + "\n" +
                ", TP=" + TP + "\n" +
                ", HFp=" + HFp + "\n" +
                ", LFp=" + LFp + "\n" +
                ", VLFp=" + VLFp + "\n" +
                ", HFpDescription='" + HFpDescription + '\'' + "\n" +
                ", LFpDescription='" + LFpDescription + '\'' + "\n" +
                ", VLFpDescription='" + VLFpDescription + '\'' + "\n" +
                ", IC=" + IC + "\n" +
                ", IVV=" + IVV + "\n" +
                ", ISCA=" + ISCA + "\n" +
                ", VNSRegulationDescription='" + VNSRegulationDescription + '\'' + "\n" +
                '}';
    }

    public static int getHistogramInterval() {
        return HISTOGRAM_INTERVAL;
    }

    public List<Double> getOriginalVariant() {
        return originalVariant;
    }

    public void setOriginalVariant(List<Double> originalVariant) {
        this.originalVariant = originalVariant;
    }

    //public List<Complex> getFourieValues() {
    //    return fourieValues;
    //}

    //public void setFourieValues(List<Complex> fourieValues) {
    //   this.fourieValues = fourieValues;
    //}

    public List<Double> getFourieFrequencies() {
        return fourieFrequencies;
    }

    public void setFourieFrequencies(List<Double> fourieFrequencies) {
        this.fourieFrequencies = fourieFrequencies;
    }

    public List<Double> getPowerValues() {
        return powerValues;
    }

    public void setPowerValues(List<Double> powerValues) {
        this.powerValues = powerValues;
    }

    public Double getHF() {
        return HF;
    }

    public void setHF(Double HF) {
        this.HF = HF;
    }

    public Double getLF() {
        return LF;
    }

    public void setLF(Double LF) {
        this.LF = LF;
    }

    public Double getVLF() {
        return VLF;
    }

    public void setVLF(Double VLF) {
        this.VLF = VLF;
    }

    public Double getTP() {
        return TP;
    }

    public void setTP(Double TP) {
        this.TP = TP;
    }

    public Double getHFp() {
        return HFp;
    }

    public void setHFp(Double HFp) {
        this.HFp = HFp;
    }

    public Double getLFp() {
        return LFp;
    }

    public void setLFp(Double LFp) {
        this.LFp = LFp;
    }

    public Double getVLFp() {
        return VLFp;
    }

    public void setVLFp(Double VLFp) {
        this.VLFp = VLFp;
    }

    public String getHFpDescription() {
        return HFpDescription;
    }

    public void setHFpDescription(String HFpDescription) {
        this.HFpDescription = HFpDescription;
    }

    public String getLFpDescription() {
        return LFpDescription;
    }

    public void setLFpDescription(String LFpDescription) {
        this.LFpDescription = LFpDescription;
    }

    public String getVLFpDescription() {
        return VLFpDescription;
    }

    public void setVLFpDescription(String VLFpDescription) {
        this.VLFpDescription = VLFpDescription;
    }

    public Double getIC() {
        return IC;
    }

    public void setIC(Double IC) {
        this.IC = IC;
    }

    public Double getIVV() {
        return IVV;
    }

    public void setIVV(Double IVV) {
        this.IVV = IVV;
    }

    public Double getISCA() {
        return ISCA;
    }

    public void setISCA(Double ISCA) {
        this.ISCA = ISCA;
    }

    public String getVNSRegulationDescription() {
        return VNSRegulationDescription;
    }

    public void setVNSRegulationDescription(String VNSRegulationDescription) {
        this.VNSRegulationDescription = VNSRegulationDescription;
    }

    public void countModel() {

        countFourie();
        countSpectrums();

        countIndexes();

        countStringValues();

        //System.out.println(this.toString());

    }

    private void countFourie() {

        List<Complex> fValues = new ArrayList<>();

        int variantSize = originalVariant.size();

        //Выполняем преобразование Фурье - разложение на гармоники
        for (int i = 0; i < variantSize; i++) {
            Complex X_current = new Complex(0, 0);
            for (int k = 0; k < variantSize; k++) {
                Complex a = new Complex(0, -2 * Math.PI * i * k / variantSize);
                X_current = X_current.plus(new Complex(originalVariant.get(k), 0).times(a.exp()));
            }
            fValues.add(X_current.divides(new Complex(variantSize, 0)));
        }
        //System.out.println(fValues);
        //setFourieValues(fValues);

        //Вычисляем спектральную мощность
        List<Double> fFrequencies = new ArrayList<>();
        List<Double> fPowers = new ArrayList<>();

        double[] x = new double[originalVariant.size()];
        for (int i = 1; i < originalVariant.size(); i++) {
            x[i] = x[i - 1] + originalVariant.get(i);
        }

        //Игнорируем нулевую гармонику, потому что там полная дичь, так что все считаем с 1 индекса
        for (int k = 1; k < (variantSize + 1) / 2; k++) {
            fPowers.add(round((Math.pow(fValues.get(k).re(), 2.0) + Math.pow(fValues.get(k).im(), 2.0))));
            fFrequencies.add(round((x[k - 1] / x[variantSize - 1])));
        }

        setFourieFrequencies(fFrequencies);
        setPowerValues(fPowers);
        // System.out.println(fFrequencies);
        //System.out.println(fPowers);


    }

    private void countSpectrums() {
        double HF = 0.0, HF_min = 1000000.0, HF_max = 0.0;
        double LF = 0.0, LF_min = 10000000.0, LF_max = 0.0;
        double VLF = 0.0, VLF_min = 1000000.0, VLF_max = 0.0;
        for (int k = 0; k < powerValues.size(); k++) {
            if ((fourieFrequencies.get(k) > 0.15) && (fourieFrequencies.get(k) <= 0.4)) {
                HF_max = Math.max(HF_max, powerValues.get(k));
                HF_min = Math.min(HF_min, powerValues.get(k));
                HF = HF + powerValues.get(k);
            } else if ((fourieFrequencies.get(k) > 0.04) && (fourieFrequencies.get(k) <= 0.15)) {
                LF_max = Math.max(LF_max, powerValues.get(k));
                LF_min = Math.min(LF_min, powerValues.get(k));
                LF = LF + powerValues.get(k);
            } else if ((fourieFrequencies.get(k) > 0.015) && (fourieFrequencies.get(k) <= 0.04)) {
                VLF_max = Math.max(VLF_max, powerValues.get(k));
                VLF_min = Math.min(VLF_min, powerValues.get(k));
                VLF = VLF + powerValues.get(k);
            }
        }

        setHF(round(HF));

        setLF(round(LF));

        setVLF(round(VLF));

        setTP(round(HF + LF + VLF));

        setHFp(round((HF / TP) * 100));
        setLFp(round((LF / TP) * 100));
        setVLFp(round((VLF / TP) * 100));
    }

    private void countIndexes() {
        setIC(round((VLF + LF) / HF));
        setIVV(round(LF / HF));
        setISCA(round(LF / VLF));
    }

    private void countStringValues() {

        if ((HFp < 25) && (HFp >= 15)) {
            setHFpDescription("normal");
        } else if ((HFp < 15) && (HFp >= 8)) {
            setHFpDescription("small decrease");
        } else if ((HFp < 8) && (HFp >= 2)) {
            setHFpDescription("big decrease");
        } else if (HFp >= 25) {
            setHFpDescription("increase");
        } else {
            setHFpDescription("Out of range");
        }

        if ((LFp < 40) && (LFp >= 15)) {
            setLFpDescription("normal");
        } else if (LFp < 15) {
            setLFpDescription("decrease");
        } else if (LFp >= 40) {
            setLFpDescription("increase");
        } else {
            setLFpDescription("Out of range");
        }

        if ((VLFp < 30) && (VLFp >= 15)) {
            setVLFpDescription("normal");
        } else if (VLFp < 15) {
            setVLFpDescription("decrease");
        } else if (VLFp >= 30) {
            setVLFpDescription("increase");
        } else {
            setVLFpDescription("Out of range");
        }

        if (IVV <= 0.5) {
            setVNSRegulationDescription("vagotonia");
        } else if ((IVV > 0.5) && (IVV <= 2)) {
            setVNSRegulationDescription("normotonia");
        } else if (IVV > 2) {
            setVNSRegulationDescription("simpatikotonia");
        }
    }


    //Просто методично сверяет все значения, которые ввел пользователь, с эталонными (+- 2%) и подсчитывает результат пользователя и комментарий
    public Map<BigDecimal, String> countPoints(AnswerModel correctAnswer, AnswerModel userAnswer) {
        Map<BigDecimal, String> result = new HashMap<>();
        double resultPoints = 0.0;
        StringBuilder comment = new StringBuilder();

        boolean flag = true;

        for (int i = 0; i < userAnswer.getPowerValues().size(); i++) {
            if (!checkWithAccuracy(correctAnswer.getPowerValues().get(i), userAnswer.getPowerValues().get(i))) {
                flag = false;
            }
            if (!checkWithAccuracy(correctAnswer.getFourieFrequencies().get(i), userAnswer.getFourieFrequencies().get(i))) {
                flag = false;
            }
        }

        if (flag) {
            resultPoints += 0.2;

            if (checkWithAccuracy(correctAnswer.getHF(), userAnswer.getHF())) {
                resultPoints += 0.1;
                if (checkWithAccuracy(correctAnswer.getHFp(), userAnswer.getHFp())) {
                    resultPoints += 0.055;

                    if (correctAnswer.getHFpDescription().equals(userAnswer.HFpDescription)) {
                        resultPoints += 0.025;
                    } else {
                        comment.append("Неправильно сделан вывод по значению HF%;\n");
                    }
                } else {
                    comment.append("Неправильно посчитано значение HF%;\n");
                }
            } else {
                comment.append("Неправильно посчитано значение HF;\n");
            }

            if (checkWithAccuracy(correctAnswer.getLF(), userAnswer.getLF())) {
                resultPoints += 0.1;
                if (checkWithAccuracy(correctAnswer.getLFp(), userAnswer.getLFp())) {
                    resultPoints += 0.055;
                    if (correctAnswer.getLFpDescription().equals(userAnswer.LFpDescription)) {
                        resultPoints += 0.025;
                    } else {
                        comment.append("Неправильно сделан вывод по значению LF%;\n");
                    }
                } else {
                    comment.append("Неправильно посчитано значение LF%;\n");
                }
            } else {
                comment.append("Неправильно посчитано значение LF;\n");
            }

            if (checkWithAccuracy(correctAnswer.getVLF(), userAnswer.getVLF())) {
                resultPoints += 0.1;
                if (checkWithAccuracy(correctAnswer.getVLFp(), userAnswer.getVLFp())) {
                    resultPoints += 0.055;

                    if (correctAnswer.getVLFpDescription().equals(userAnswer.VLFpDescription)) {
                        resultPoints += 0.025;
                    } else {
                        comment.append("Неправильно сделан вывод по значению VLF%;\n");
                    }
                } else {
                    comment.append("Неправильно посчитано значение VLF%;\n");
                }
            } else {
                comment.append("Неправильно посчитано значение VLF;\n");
            }

            if (checkWithAccuracy(correctAnswer.getTP(), userAnswer.getTP())) {
                resultPoints += 0.055;
            } else {
                comment.append("Неправильно посчитано значение TP;\n");
            }


            if (checkWithAccuracy(correctAnswer.getIC(), userAnswer.getIC())) {
                resultPoints += 0.06;
            } else {
                comment.append("Неправильно посчитано значение IC;\n");
            }

            if (checkWithAccuracy(correctAnswer.getIVV(), userAnswer.getIVV())) {
                resultPoints += 0.06;

                if (correctAnswer.getVNSRegulationDescription().equals(userAnswer.VNSRegulationDescription)) {
                    resultPoints += 0.025;
                } else {
                    comment.append("Неправильно сделан вывод о типе регуляции ВНС;\n");
                }
            } else {
                comment.append("Неправильно посчитано значение IVV;\n");
            }

            if (checkWithAccuracy(correctAnswer.getISCA(), userAnswer.getISCA())) {
                resultPoints += 0.06;
            } else {
                comment.append("Неправильно посчитано значение ISCA;\n");
            }


        } else {
            comment.append("Неправильно посчитаны мощности спектра и/или частоты;\n");
        }

        if (resultPoints == 1.0) {
            comment.append("Отличная работа! Все значения посчитаны верно!");
        }

        result.put(BigDecimal.valueOf(resultPoints), comment.toString());
        return result;
    }

    private boolean checkWithAccuracy(double correctValue, double userValue) {
        double accuracy = 0.05;
        double allowedDifference = correctValue * accuracy;
        return (userValue >= correctValue - allowedDifference) && (userValue <= correctValue + allowedDifference);
    }

    private double round(double value) {
        BigDecimal bd = new BigDecimal(Double.toString(value));
        bd = bd.setScale(3, RoundingMode.HALF_UP);
        return bd.doubleValue();
    }
}
