function init_lab() {

    var vlab_code = '<div class="vlab_setting">' +
        '<div class="block_title">' +
        '<div class="vlab_name">Исследование периодических составляющих вариабельности сердечного ритма</div>' +
        '<input class="btn_help btn" type="button" value="Справка" title="Справка по работе с лабораторией"/>' +
        '<input class="btn_theory btn" type="button" value="Теория" title="Теоретические сведения для расчетов"/>' +
        '</div>' +
        '<div class="block_task">' +
        '<div class="task_text">' +
        '<p>Рассчитайте все необходимые параметры, используя данные вашего варианта.<br>Точность всех вводимых значений - 3 знака после запятой</p>' +
        '<p>Данные вашего варианта можно скачать здесь:</p>' +
        '<div class="file_buttons">' +
        '<input type="button" class="file_txt_button" value="Файл в формате txt" disabled>' +
        '<input type="button" class="file_xlsx_button" value="Файл в формате xlsx" disabled></div></div>' +
        '</div>' +
        '<div class="block_plot_1"><p class = "plot_1_comment">    </p>' +
        '<div class="plot_1">' +
        '</div>' +
        '</div>' +
        '<div class="block_plot_2"><p class = "plot_2_comment" wrong_data=0>    </p>' +
        '<div class="plot_2">' +
        '</div>' +
        '</div>' +
        '<div class="vlab_answers answers_1">' +
        '<div class = "task_number">1/7</div>' +
        '<p>В данном этапе мы предлагаем Вам рассмотреть график, построенный по исходным данным Вашего варианта. По оси Y откладываются значения кардиоинтервалов, а по оси Х откладывается текущее время, которое получается путем суммирования значений кардиоинтервалов.</p>' +
        '<p>Как Вы можете заметить, этот график не очень показателен, мы не можем сделать никаких выводов о характере функции, которой описывается изменение значений кардиоинтервалов.</p>' +
        '<p>Поэтому для исследования подобных функций используется спектральный анализ, который позволяет количественно оценить различные частотные составляющие колебаний ритма сердца и наглядно графически представить соотношения разных компонентов сердечного ритма, отражающих активность определенных звеньев регуляторного механизма. </p>' +
        '<p>Для перехода к спектральному анализу необходимо провести преобразование Фурье, чем мы и займемся в следующем этапе.</p>' +
        '</div>' +
        '<div class="vlab_answers answers_2">' +
        '<div class = "task_number">2/7</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="fourie_value">Значения данных после преобразования Фурье: </label></td>' +
        '<td><input id = "file_input" type="file"' +
        'id="fourie_value"></td>' +
        '</tr>' +
        '</table>' +
        '<input type="button" class="btn btn_fourie" value="Построить график"/>' +
        '</div>' +
        '<div class="vlab_answers answers_3">' +
        '<div class = "task_number">3/7</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="HF_value">Значение параметра HF: </label></td>' +
        '<td><input type="text" id="HF_value" class = "input_is_not_NAN">  мс<sup>2</sup></td>' +
        '<td><label for="LF_value">Значение параметра LF: </label></td>' +
        '<td><input type="text" id="LF_value" class = "input_is_not_NAN">  мс<sup>2</sup></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="VLF_value">Значение параметра VLF: </label></td>' +
        '<td><input type="text" id="VLF_value" class = "input_is_not_NAN">  мс<sup>2</sup></td>' +
        '<td><label for="TP_value">Значение параметра TP: </label></td>' +
        '<td><input type="text" id="TP_value" class = "input_is_not_NAN">  мс<sup>2</sup></td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="vlab_answers answers_4">' +
        '<div class = "task_number">4/7</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="HFp_value">Значение параметра HF%: </label></td>' +
        '<td><input type="text" id="HFp_value" class = "input_is_not_NAN">  %</td>' +
        '<td><p>' +
        'Выберите утверждение, которое лучше всего описывает полученный результат:<br>' +
        '<input type="radio" name="HFpDescription" value="normal" checked>Значение доли HF находится в норме.<br>' +
        '<input type="radio" name="HFpDescription" value="small decrease">Значение доли HF ниже нормы.<br>' +
        '<input type="radio" name="HFpDescription" value="big decrease">Значение доли HF значительно ниже нормы.<br>' +
        '<input type="radio" name="HFpDescription" value="increase">Значение доли HF выше нормы.<br>' +
        '</p></td>' +
        '</tr>' +
        '</table></div>' +
        '<div class="vlab_answers answers_5">' +
        '<div class = "task_number">5/7</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="LFp_value">Значение параметра LF%: </label></td>' +
        '<td><input type="text" id="LFp_value" class = "input_is_not_NAN">  %</td>' +
        '<td><p>' +
        'Выберите утверждение, которое лучше всего описывает полученный результат:<br>' +
        '<input type="radio" name="LFpDescription" value="normal" checked>Значение доли LF находится в норме.<br>' +
        '<input type="radio" name="LFpDescription" value="decrease">Значение доли LF ниже нормы<br>' +
        '<input type="radio" name="LFpDescription" value="increase">Значение доли LF выше нормы.<br>' +
        '</p></td>' +
        '</tr>' +
        '</table></div>' +
        '<div class="vlab_answers answers_6">' +
        '<div class = "task_number">6/7</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="VLFp_value">Значение параметра VLF%: </label></td>' +
        '<td><input type="text" id="VLFp_value" class = "input_is_not_NAN">  %</td>' +
        '<td><p>' +
        'Выберите утверждение, которое лучше всего описывает полученный результат:<br>' +
        '<input type="radio" name="VLFpDescription" value="normal" checked>Значение доли VLF находится в норме.<br>' +
        '<input type="radio" name="VLFpDescription" value="decrease">Значение доли VLF ниже нормы<br>' +
        '<input type="radio" name="VLFpDescription" value="increase">Значение доли VLF выше нормы.<br>' +
        '</p></td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="vlab_answers answers_7">' +
        '<div class = "task_number">7/7</div>' +
        '<table>' +
        '<tr>' +
        '<td><label for="IC_value">Значение параметра ИЦ (IC): </label></td>' +
        '<td><input type="text" id="IC_value" class = "input_is_not_NAN"></td>' +
        '<td><label for="IVV_value">Значение параметра ИВВ: </label></td>' +
        '<td><input type="text" id="IVV_value" class = "input_is_not_NAN"></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="ISCA_value">Значение параметра ИАП (ISCA): </label></td>' +
        '<td><input type="text" id="ISCA_value" class = "input_is_not_NAN"></td>' +
        '</tr>' +
        '</table>' +
        '<p>' +
        'Выберите утверждение, которое лучше всего описывает полученный результат:<br>' +
        '<input type="radio" name="VNSRegulationDescription" value="vagotonia" checked>У пациента наблюдается ваготонический тип регуляции ВНС<br>' +
        '<input type="radio" name="VNSRegulationDescription" value="normotonia">У пациента наблюдается нормотонический тип регуляции ВНС<br>' +
        '<input type="radio" name="VNSRegulationDescription" value="simpatikotonia">У пациента наблюдается симпатикотонический тип регуляции ВНС<br>' +
        '</p>' +
        '</div>' +
        '<div class="block_control">' +
        '<input class="btn_prev btn not_active" type="button" value="К предыдущему этапу" disabled/>' +
        '<input class="btn_next btn" type="button" value="К следующему этапу"/>' +
        '</div>' +
        '<div class="block_help">' +
        '<h1>Справка по работе с лабораторией</h1>' +
        '<p>В данной лаборатории Вам необходимо выполнить 6 этапов: провести преобразование Фурье, которое позволяет нам перейти к спектральному анализу, рассчитать значения мощностей HF, LF, VLF и TP, оценить значения мощностей в процентном соотношении, рассчитать показатели ИЦ, ИВВ и ИАП и сделать вывод о типе регуляции ВНС.</p>' +
        '<p>В качестве исходных данных используются реальные данные кардиоинтервалограммы, которые рассматриваются как совокупность последовательных временных промежутков – RR-интервалов. </p>' +
        '<p>Данные вашего варианта Вы можете скачать, нажав на соответствующие кнопки в верхней части экрана. Вы можете выбрать формат файла, который удобнее для использования в расчетах. Если Вы собираетесь писать на каком-либо языке программирования, то мы рекомендуем использовать txt-файл. Если же Вы собираетесь обрабатывать данные в Excel, то мы рекомендуем использовать xlsx-файл.</p>' +
        '<p>Вы можете переключаться между этапами, используя кнопки внизу экрана, при этом все введенные данные будут сохранены. Вы можете выполнять этапы в любом порядке, однако последующие этапы зависят от данных из предыдущих этапов, поэтому мы рекомендуем выполнять этапы именно в том порядке, в котором они расположены.</p>' +
        '<p>Во 2 этапе есть кнопка, запускающая визуализацию введенных данных. Будьте внимательны к формату данных в загружаемом файле, который необходим для корректной работы визуализации и корректной проверки Вашего ответа. Визуализация используется для большей наглядности полученных данных, ее использование не является обязательным условием выполнения задания, однако мы крайне рекомендуем воспользоваться этой возможностью проверить свой ответ до его отправки на сервер для оценивания.</p>' +
        '<p>Для каждого этапа есть страница с теоретическим материалом, которую можно открыть, нажав на соответствующую кнопку в правом верхнем углу экрана. Пожалуйста, внимательно читайте расположенный там материал, так как он содержит всю необходимую информацию для выполнения этапа, а также формат, в котором должны быть представлены данные для того, чтобы Ваш ответ считался правильным.</p>' +
        '<p class = "text-center">Желаем успехов!</p>' +
        '</div>' +
        '<div class="block_theory theory_1">' +
        '<h1>Преобразование Фурье</h1>' +
        '<p>В данном этапе с помощью представленного графика мы приходим к выводу, что простой анализ данных ничего не может сказать нам о характере функции, которой описываются эти данные. Поэтому мы будем использовать преобразование Фурье, чтобы перейти к спектральным характеристикам.</p>' +
        '<p>Спектральные методы анализа ВСР получили в настоящее время очень широкое распространение. Анализ спектральной плотности мощности колебаний дает информацию о распределении мощности в зависимости от частоты колебаний. Применение спектрального анализа позволяет количественно оценить различные частотные составляющие колебаний сердечного ритма и наглядно графически представить соотношения разных компонентов ритмов сердца, отражающих активность определенных звеньев регуляторного механизма.</p>' +
        '<p>Различают параметрические и непараметрические методы спектрального анализа. К первым относится авторегрессионный анализ, ко вторым – быстрое преобразование Фурье и периодограммный анализ. Обе эти группы методов дают сравнимые результаты. Мы будем использовать второй метод</p>' +
        '</div>' +
        '<div class="block_theory theory_2">' +
        '<p>Для проведения преобразования Фурье необходимо выполнить следующие действия:</p>' +
        '<ol>' +
        '<li>Для начала необходимо подготовить исходные данные, привести их к тому виду, который будет пригоден для использования преобразования Фурье. Для этого мы составим набор данных, который использовался для построения графика в первом этапе. Для оси Y мы оставляем исходные данные, а для оси Х суммируем значения кардиоинтервалов.<br>' +
        'Допустим, в Ваше варианте данные начинаются с последовательности 926, 718, 803, 935. Тогда после выполнения этого пункта у Вас будет следующий набор:<br>' +
        '<p class="block_help_answer_example"> Значения Х: 926, 1664, 2447, 3382</p>' +
        '<p class="block_help_answer_example"> Значения Y: 926, 718, 803, 935</p>' +
        'Для выполнения задания Вам необходимо перечислить ВСЕ значения, которые будут участвовать в преобразовании Фурье, т. е. если в исходном варианте было 300 значений, то и на этом этапе выполнения задания у вас будет две последовательности из 300 чисел.' +
        '</li>' +
        '<li>Дальше необходимо перевести значения времени, которые мы получили в наборе Х, в частоту. Для этого мы будем использовать следующую формулу: <br><div class="theory_img"><img alt = "" src="theory_2_1.png" />,</div><br> где f<sub>i</sub> - i-ое значение частоты, x<sub>i</sub> - i-ое значение времени из набора Х, а x<sub>max</sub> - суммарное время наблюдения (в нашем случае равно последнему значению в наборе Х). Таким образом, мы получаем новый набор из 300 значений частот.</li>' +
        '<li>Следующий этап - непосредственно преобразование Фурье. Его мы будем применять к значениям из набора Y. Для проеобразования Фурье мы будем использовать следующую формулу: <br><div class="theory_img"><img alt = "" src="theory_2_2.png" />,</div><br> где F<sub>k</sub> - k-ое значение выходного значения преобразования Фурье, y<sub>n</sub> - n-ое значение исходного кардиоинтервала из набора Y, N - количество значений в наборе Y, k - порядковый номер рассчитываемого значения F, n - порядковый номер суммируемого значения y. Таким образом, мы получаем новый набор из 300 комплексных чисел, полученных с помощью преобразования Фурье.' +
        '</li>' +
        '<li>Последний этап - получение спектральной мощности полученного сигнала. Для этого мы будем использовать следующую формулу: <br><div class="theory_img"><img alt = "" src="theory_2_3.png" />,</div><br> где P<sub>k</sub> - k-ое значение спектральной мощности, F<sub>k</sub> - k-ое значение, полученное в предыдущем пункте, R<sub>k</sub> - действительная часть k-ого значения F, I<sub>k</sub> - мнимая часть k-ого значения F. На этом этапе мы уже получаем набор из 300 действительных чисел</li>' +
        '</ol>' +
        '<p>На этом этапе можно заметить, что значения спектральных мощностей начинают зеркально повторяться, начиная с середины набора. Это связано с тем, что преобразование раскладывает сигнал на синусоидальные составляющие (которые называются гармониками) с частотами от N колебаний за период до одного колебания за период. Поскольку частота дискретизации сама по себе равна N отсчётов за период, то высокочастотные составляющие не могут быть корректно отображены — возникает муаровый эффект. Это приводит к тому, что вторая половина из N комплексных амплитуд, фактически, является зеркальным отображением первой и не несёт дополнительной информации. Поэтому мы можем опустить эти амплитуды при расчетах. <b>Таким образом, дальше мы будем рассматривать только первую половину частот и спектральных мощностей.</b></p>' +
        '<p>Так как вбивать такой большой набор чисел в поле для ответа нам кажется нецелесообразным, мы предлагаем Вам загрузить файл с полученными данными. Вы можете загрузить ответ в форматах txt, csv и xlsx.</p>' +
        '<p><b>Если Вы используете файл формата txt или csv</b>, Ваши данные должны быть представлены в следующем формате: набор значений частот, перечисленных через запятую, затем точка с запятой, затем набор значений спектральных мощностей, перечисленных через запятую. Разделитель целой и дробной частей в числах - точка.</p>' +
        '<p>Пример ответа (для первых трех чисел в каждом наборе):</p>' +
        '<p class="block_help_answer_example"> 0.0, 0.003, 0.007; 95.767, 57.328, 18.393</p>' +
        '<p><b>Если Вы используете файл формата xlsx</b>, Ваши данные должны быть представлены в следующем формате: два столбца значений, названных x и y соответственно. В столбце х перечислены значения частот, в столбце у - значения спектральных частот. Разделитель целой и дробной частей в числах - запятая.</p>' +
        '<p>Пример ответа (для первых трех чисел в каждом наборе):</p>' +
        '<p class="block_help_answer_example"> <table><tr><td>x</td><td>y</td></tr><tr><td>0,0</td><td>95,767</td></tr><tr><td>0,003</td><td>57,328</td></tr><tr><td>0,007</td><td>18,393</td></tr></table></p>' +
        '<p>Для помощи в представлении данных и самопроверки на странице этапа есть кнопка "Построить график", которая отрисовывает график по загруженным Вами данным. Также она позволяет отсечь ошибки ввода, например, если вы загрузили файл в неправильном формате, ввели символы, отличные от цифр, запятых и точек. Отрисовка графика не является обязательной для выполнения задания, однако мы крайне рекомендуем воспользоваться этой возможностью проверить себя перед завершением выполнения задания.</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_3">' +
        '<h1>Спектральные компоненты</h1>' +
        '<p>Для дальнейшего анализа нам необходимо сгруппировать полученные данные в зависимости от частоты, с которой они появляются</p>' +
        '<p>Мы выделяем следующие три спектральных диапазона:</p>' +
        '<table>' +
        '<tr><td>Диапазоны</td><td>Обозначение</td><td>Частота, Гц</td></tr>' +
        '<tr><td>Высокочастотный диапазон (дыхательные волны)</td><td>HF</td><td>(0.15; 0.4]</td></tr>' +
        '<tr><td>Низкочастотный диапазон (медленные волны 1-го порядка)</td><td>LF</td><td>(0.04; 0,15]</td></tr>' +
        '<tr><td>Очень низкочастотный диапазон (медленные волны 2-го порядка)</td><td>VLF</td><td>(0.015; 0.04]</td></tr>' +
        '</table>' +
        '<p>При спектральном анализе обычно для каждого из компонентов вычисляют абсолютную суммарную мощность в диапазоне и суммарную мощность во всех диапазонах. </p>' +
        '<p>Мощность спектра HF (суммарная мощность в частотном диапазоне) вычисляется по формуле:</p><br><div class="theory_img"><img alt = "" src="theory_3_1.png" />,</div><br><p>где HF<sub>max</sub>  и HF<sub>min</sub> - максимальное и минимальное значения спектра, соответствующие границам диапазона; P<sub>j</sub> - спектральная плотность мощности.</p>' +
        '<p>Мощности спектров в других частотных диапазонах вычисляются аналогично.</p>' +
        '<p>Суммарная мощность спектра ТР отражает суммарный абсолютный уровень активности регуляторных систем и определяется как сумма мощностей в диапазонах HF, LF, VLF:<br><div class="theory_img"><img alt = "" src="theory_3_2.png" /></div></p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_4">' +
        '<h1>Относительные значения</h1>' +
        '<p>В следующих этапах мы будем вычислять и оценивать относительные значения в процентах от суммарной мощности во всех диапазонах.</p>' +
        '<p>Начнем с высокочастотного диапазона. Вычислим мощность спектра в частотном диапазоне HF в процентном отношении ко всему диапазону:<br><div class="theory_img"><img alt = "" src="theory_4_1.png" /></div><br></p>' +
        '<p>Обычно дыхательная составляющая (HF) составляет 15-25% суммарной мощности спектра. Снижение этой доли до 8% (небольшое отклонение от нормы) указывает на смещение вегетативного баланса в сторону преобладания симпатического отдела. Если же величина HF падает до 2%, то можно говорить о резком преобладании симпатической активности (сильное отклонение от нормы).</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_5">' +
        '<h1>Относительные значения</h1>' +
        '<p>Следующий диапазон - низкочастотный. Вычислим мощность спектра в частотном диапазоне LF в процентном отношении ко всему диапазону:<br><div class="theory_img"><img alt = "" src="theory_5_1.png" /></div><br></p>' +
        '<p>LF характеризует состояние симпатического отдела ВНС, в частности, системы регуляции сосудистого тонуса. Обычно в норме процентная доля вазомоторных волн в положении «лежа» составляет от 15 до 40%.</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>' +
        '<div class="block_theory theory_6">' +
        '<h1>Относительные значения</h1>' +
        '<p>Следующий диапазон - очень низкочастотный. Вычислим мощность спектра в частотном диапазоне VLF в процентном отношении ко всему диапазону:<br><div class="theory_img"><img alt = "" src="theory_6_1.png" /></div><br></p>' +
        '<p>Спектральная составляющая сердечного ритма в диапазоне VLF - 0,04-0,015 Гц характеризует активность симпатического отдела вегетативной нервной системы. Амплитуда VLF тесно связана с психоэмоциональным напряжением. Таким образом, VLF характеризует влияние высших вегетативных центров на сердечно-сосудистый подкорковый центр и может использоваться как надежный маркер степени связи автономных (сегментарных) уровней регуляции кровообращения с надсегментарными, в том числе с гипофизарно-гипоталамическим и корковым уровнем. В норме мощность VLF составляет 15-30% суммарной мощности спектра.</p>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' + '</div>' +
        '<div class="block_theory theory_7">' +
        '<h1>Основные показатели и тип регуляции ВНС</h1>' +
        '<p>Последним этапом мы рассчитаем некоторые показатели, которые помогают в анализе функционального состояния человека.</p>' +
        '<p>По данным спектрального анализа сердечного ритма вычисляются следующие показатели: </p>' +
        '<ul>' +
        '<li>Индекс централизации ИЦ(IC) отражает степень централизации управления ритмом сердца (преобладания активности центрального контура регуляции над автономным, т.е. преобладание недыхательных составляющих синусовой аритмии над дыхательными). Индекс централизации рассчитывается следующим образом: <br><div class="theory_img"><img alt = "" src="theory_7_1.png" /></div></li>' +
        '<li>Индекс вагосимпатического взаимодействия ИВВ (IVV) оценивает баланс между симпатической и парасимпатической системами. Индекс вагосимпатического взаимодействия рассчитывается следующим образом: <br><div class="theory_img"><img alt = "" src="theory_7_2.png" /></div></li>' +
        '<li>Индекс активации подкорковых нервных центров ИАП (ISCA) характеризует активность сердечно-сосудистого подкоркового нервного центра по отношению к более высоким уровням управления. Повышенная активность подкорковых нервных центров проявляется ростом данного показателя. ИПА рассчитывается по следующей формуле: <br><div class="theory_img"><img alt = "" src="theory_7_3.png" /></div></li>' +
        '</ul>' +
        '<p>Также по индексу вагосиматического взаимодействия позволяет нам сделать вывод о типе вегетативной регуляции. Зная тип регуляции ВНС, можно делать вывод о значениях, которые свойственны пациенту в покое, и тем самым лучше выявлять отклонения от нормы.</p>' +
        '<p>Будем выделять типы регуляции ВНС следующим образом:</p>' +
        '<table>' +
        '<tr><td>Тип регуляции вегетативной нервной системы</td><td>Индекс вагосимпатического взаимодействия ИВВ</td></tr>' +
        '<tr><td>Ваготония</td><td>Менее 0.5</td></tr>' +
        '<tr><td>Нормотония </td><td>0.5–2.0</td></tr>' +
        '<tr><td>Симпатикотония</td><td>Более 2.0</td></tr>' +
        '</table>' +
        '<p>Точность вводимых значений, если число дробное: 3 знака после запятой.</p>' +
        '</div>';

    var help_active = false;
    var theory_active = false;
    var container;
    var task_number = 1;
    var variant;
    var data_file;
    var file;
    var power_values = [];
    var frequencies_values = [];

    function show_help() {
        if (!help_active) {
            help_active = true;
            $(".block_help").css("display", "block");
            $(".btn_help").attr("value", "Вернуться");
            let button_theory = document.querySelector('.btn_theory');
            button_theory.classList.add("not_active");
            button_theory.disabled = true;
        } else {
            help_active = false;
            $(".block_help").css("display", "none");
            $(".btn_help").attr("value", "Справка");
            let button_theory = document.querySelector('.btn_theory');
            button_theory.classList.remove("not_active");
            button_theory.disabled = false;
        }
    }

    function show_theory() {
        if (!theory_active) {
            theory_active = true;
            let theory_blocks = document.querySelectorAll('.block_theory');
            theory_blocks[task_number - 1].style.display = 'block';
            $(".btn_theory").attr("value", "Вернуться");
            let button_help = document.querySelector('.btn_help');
            button_help.classList.add("not_active");
            button_help.disabled = true;

        } else {
            theory_active = false;
            let theory_blocks = document.querySelectorAll('.block_theory');
            theory_blocks[task_number - 1].style.display = 'none';
            $(".btn_theory").attr("value", "Теория");
            let button_help = document.querySelector('.btn_help');
            button_help.classList.remove("not_active");
            button_help.disabled = false;
        }
    }

    function check_buttons_and_plots() {
        if (task_number === 1) {
            let button_prev = document.querySelector('.btn_prev');
            button_prev.classList.add("not_active");
            let plot_blocks = document.querySelector('.block_plot_1');
            plot_blocks.style.display = 'block';

            //Удаляем комментарий, что нет файла, если уже переключили стрелочку на следующий этап
            plot_blocks = document.querySelector('.plot_1');
            plot_blocks.classList.remove("svg_hidden");
            var plot_comment = $(".plot_1_comment")[0];
            plot_comment.style.display = "none";
            plot_comment.innerHTML = "";

            plot_blocks = document.querySelector('.block_plot_2');
            plot_blocks.style.display = 'none';

        } else if (task_number === 7) {
            let button_next = document.querySelector('.btn_next');
            button_next.classList.add("not_active");
            button_next.disabled = true;
        } else {

            if (task_number === 2) {
                let plot_blocks = document.querySelector('.block_plot_1');
                plot_blocks.style.display = 'none';

                plot_blocks = document.querySelector('.block_plot_2');
                plot_blocks.style.display = 'block';
            }

            let button_prev = document.querySelector('.btn_prev');
            button_prev.classList.remove("not_active");
            button_prev.disabled = false;
            let button_next = document.querySelector('.btn_next');
            button_next.classList.remove("not_active");
            button_next.disabled = false;
        }
    }

    function prev_task() {
        let answer_blocks = document.querySelectorAll('.vlab_answers');
        answer_blocks[task_number - 1].style.display = 'none';
        if (task_number > 1) {
            task_number = task_number - 1;
        }
        check_buttons_and_plots();
        answer_blocks[task_number - 1].style.display = 'block';
    }

    function next_task() {
        let answer_blocks = document.querySelectorAll('.vlab_answers');
        answer_blocks[task_number - 1].style.display = 'none';
        if (task_number < 7) {
            task_number = task_number + 1;
        }
        check_buttons_and_plots();
        answer_blocks[task_number - 1].style.display = 'block';
    }

    function setVariant() {
        if ($("#preGeneratedCode") !== null) {
            var raw_variant = document.getElementById("preGeneratedCode").value;
            //var raw_variant = [746,751,749,686,698,669,658,663,762,844,760,776,807,773,690,700,777,761,810,818,779,806,779,725,770,797,765,828,802,806,825,769,769,726,781,841,813,824,822,764,761,782,752,790,790,719,757,721,713,757,704,729,726,675,706,716,697,749,731,753,802,743,788,781,729,794,816,768,764,786,710,709,722,690,728,730,705,746,748,701,741,733,691,743,726,721,749,698,720,743,684,714,726,710,789,774,719,773,758,704,744,757,720,764,802,748,761,782,756,783,799,765,745,779,730,718,763,773,725,767,780,726,751,754,705,751,780,730,731,752,740,737,759,735,718,783,787,724,772,790,741,715,761,766,741,766,730,709,752,733,723,772,744,723,750,714,711,771,734,768,817,780,756,768,711,707,765,740,763,766,737,758,771,723,756,737,783,758,736,767,721,737,772,729,780,775,724,740,728,720,790,773,750,775,718,732,755,726,770,757,708,736,697,741,783,711,743,745,699,744,693,713,740,677,729,762,725,753,801,754,780,791,736,761,761,709,702,717,687,683,702,696,645,635,615,653,667,699,646,642,704,774,784,784,767,740,675,703,770,832,828,752,798,808,741,743,799,771,795,823,792,738,745,716,718,764,761,742,753,710,700,737,726,709,751,750,712,729,704,679,719,726,684,715,727,685,718,743,747,796,802,711,740,738,708,755,756,735,795,758];

            /*console.log(raw_variant);*/
            if (raw_variant !== "") {
                raw_variant = raw_variant.substring(1, (raw_variant.length - 1));
                variant = raw_variant.split(', ');
                //console.log(variant);
                //variant = raw_variant;

                let button_txt = document.querySelector('.file_txt_button');
                button_txt.disabled = false;
                let button_xlsx = document.querySelector('.file_xlsx_button');
                button_xlsx.disabled = false;

                var data_y = variant;
                for (var i = 0; i < data_y.length; i++) {
                    data_y[i] = +(data_y[i]);
                }
                var data_x = [];
                data_x[0] = 0;
                for (i = 1; i < data_y.length; i++) {
                    data_x[i] = data_x[i - 1] + data_y[i];
                }


                var plot_div = document.querySelector('.plot_1');
                var plot_comment = $(".plot_1_comment")[0];

                var not_number_data = false;
                for (i = 0; i < data_x.length; i++) {
                    data_x[i] = +(data_x[i]) / 1000;
                    data_y[i] = +(data_y[i]);
                    if (isNaN(data_x[i]) || isNaN(data_y[i])) {
                        not_number_data = true;
                    }
                }
                plot_comment.style.display = "none";
                plot_comment.innerHTML = "";
                plot_div.classList.remove("svg_hidden");
                draw_original_plot(data_x, data_y);


            } else {
                let task_text = document.querySelector('.block_task');
                task_text.innerHTML = "Произошла ошибка! Попробуйте перезагрузить страницу!";
            }

        } else {
            let task_text = document.querySelector('.block_task');
            task_text.innerHTML = "Произошла ошибка! Попробуйте перезагрузить страницу!";
        }
    }

    function write_to_file(file_type) {
        data_file = XLSX.utils.book_new();
        if (file_type === "txt") {
            var ws = XLSX.utils.aoa_to_sheet([variant]);
        } else {
            var row_variant = variant.map(elem => [elem]);
            var ws = XLSX.utils.aoa_to_sheet(row_variant);
        }
        XLSX.utils.book_append_sheet(data_file, ws);
    }

    function download_file_txt() {
        write_to_file("txt");
        XLSX.writeFile(data_file, "data.txt");
    }

    function download_file_xlsx() {
        write_to_file("xlsx");
        XLSX.writeFile(data_file, "data.xlsx");
    }

    function removeBlankAnswer(str) {
        if (str === "") {
            return 0;
        } else {
            return str;
        }
    }

    function read_file() {
        var plot_div = document.querySelector('.plot_2');
        var plot_comment = $(".plot_2_comment")[0];

        var files = document.getElementById("file_input").files;
        if (files.length !== 1) {
            plot_div.classList.add("svg_hidden");
            plot_comment.innerHTML = "Вы загрузили несколько файлов! Пожалуйста, загрузите только один файл с ответом!";
            plot_comment.style.display = "block";
            plot_comment.setAttribute("wrong_data", 0);
        } else {

            if (plot_comment.getAttribute("wrong_data") === "0") {
                plot_comment.style.display = "none";
                plot_comment.innerHTML = "";
                plot_div.classList.remove("svg_hidden");
            }

            file = files[0];
            var get_ext = file.name.split(".");
            var file_extention = get_ext[get_ext.length - 1];
            //console.log(file_extention);

            if (file_extention === "xlsx") {
                var reader = new FileReader();

                reader.onload = function (event) {
                    var data = event.target.result;
                    var workbook = XLSX.read(data, {
                        type: 'binary'
                    });
                    workbook.SheetNames.forEach(function (sheetName) {
                        var a = XLSX.utils.sheet_to_txt(workbook.Sheets[sheetName]);
                        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                        var json_object = JSON.parse(JSON.stringify(XL_row_object));
                        for (var i in json_object) {
                            frequencies_values[i] = json_object[i].x;
                            power_values[i] = json_object[i].y;
                        }
                        //console.log(frequencies_values);
                        //console.log(power_values);
                    })
                };

                reader.onerror = function (event) {
                    plot_comment.innerHTML = "Файл не может быть прочитан!";
                    plot_comment.setAttribute("wrong_data", 0);
                };

                reader.readAsBinaryString(file);

            } else if ((file_extention === "txt") || (file_extention === "csv")) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var contents = event.target.result;
                    var parsed_data = contents.split(';');
                    if (parsed_data.length === 2) {
                        frequencies_values = parsed_data[0].split(',');
                        power_values = parsed_data[1].split(',');

                        //console.log(frequencies_values);
                        //console.log(power_values);
                    } else {
                        plot_div.classList.add("svg_hidden");
                        plot_comment.setAttribute("wrong_data", 0);
                        plot_comment.innerHTML = "Пожалуйста, проверьте формат введенных данных!";
                        plot_comment.style.display = "block";
                    }
                };
                reader.onerror = function (event) {
                    plot_comment.innerHTML = "Файл не может быть прочитан!";
                    plot_comment.setAttribute("wrong_data", 0);
                };
                reader.readAsText(file);

            } else {
                plot_div.classList.add("svg_hidden");
                plot_comment.setAttribute("wrong_data", 0);
                plot_comment.innerHTML = "Пожалуйста, загрузите ответ в одном из следующих форматов: txt, csv, xlsx!";
                plot_comment.style.display = "block";
            }
        }
    }

    function draw_original_plot(data_x, data_y) {

        var color = "steelblue";
        var data = [];
        var margin = {top: 20, right: 30, bottom: 40, left: 50},
            width = 520 - margin.left - margin.right,
            height = 260 - margin.top - margin.bottom;

        data_x[data_x.length - 1] = +data_x[data_x.length - 1];
        for (var i = 0, bin; i < data_x.length; i++) {
            bin = {};
            bin.x = data_x[i];
            bin.y = data_y[i];
            data[i] = bin;
        }

        var xMax = d3.max(data_x);
        var xMin = d3.min(data_x);

        var yMax = d3.max(data_y);
        var yMin = d3.min(data_y);

        let svg_container = document.querySelector('svg.orig_plot');
        if (svg_container !== null) {
            svg_container.parentNode.removeChild(svg_container);
        }

        var x = d3.scale.linear()
            .domain([xMin, xMax])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([yMin, yMax])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select(".plot_1").append("svg")
            .attr("class", "orig_plot")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var line = d3.svg.line()
            .interpolate("basis")
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y);
            });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .call(g => g.append("text")
                .attr("x", 270)
                .attr("y", 30)
                .attr("fill", "#000")
                .attr("font-weight", "bold")
                .attr("text-anchor", "end")
                .text("Длительность измерений, с"));


        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .call(g => g.append("text")
                .attr("x", -150)
                .attr("y", -43)
                .attr("text-anchor", "start")
                .attr("transform", "rotate(270)")
                .attr("font-weight", "bold")
                .text("Кардиоинтервалы, мс"));

        svg.append("path")
            .attr("class", "line")
            .attr("d", line(data))
            .attr("stroke", 'black')
            .attr("fill", "none")
            .attr("stroke-width", 2);

        svg.selectAll('circle')
            .data(data)
            .enter().append('circle')
            .attr('r', 3)
            .attr('cx', function (d) {
                return x(d.x);
            })
            .attr('cy', function (d) {
                return y(d.y);
            });

    }


    function draw_plot(data_x, data_y) {

        var color = "steelblue";
        var data = [];
        var margin = {top: 20, right: 30, bottom: 40, left: 50},
            width = 520 - margin.left - margin.right,
            height = 260 - margin.top - margin.bottom;

        data_x[data_x.length - 1] = +data_x[data_x.length - 1];
        for (var i = 0, bin; i < data_x.length; i++) {
            bin = {};
            bin.x = data_x[i];
            bin.y = data_y[i];
            data[i] = bin;
        }

        var xMax = d3.max(data_x);
        var xMin = d3.min(data_x);

        var yMax = d3.max(data_y);
        var yMin = d3.min(data_y);

        let svg_container = document.querySelector('svg.fourie_plot');
        if (svg_container !== null) {
            svg_container.parentNode.removeChild(svg_container);
        }

        var x = d3.scale.linear()
            .domain([xMin, xMax])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([yMin, yMax])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var svg = d3.select(".plot_2").append("svg")
            .attr("class", "fourie_plot")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var line = d3.svg.line()
            .interpolate("basis")
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.y);
            });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .call(g => g.append("text")
                .attr("x", 260)
                .attr("y", 30)
                .attr("fill", "#000")
                .attr("font-weight", "bold")
                .attr("text-anchor", "end")
                .text("Частота, Гц"));


        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .call(g => g.append("text")
                .attr("x", -125)
                .attr("y", -40)
                .attr("text-anchor", "start")
                .attr("transform", "rotate(270)")
                .attr("font-weight", "bold")
                .text("Мощность, мс2"));


        svg.append("path")
            .attr("class", "line")
            .attr("d", line(data.filter(function (d) {
                return d.x <= 0.019;
            })))
            .attr("stroke", 'black')
            .attr("fill", "none")
            .attr("stroke-width", 2);

        svg.append("path")
            .attr("class", "line")
            .attr("d", line(data.filter(function (d) {
                return ((d.x >= 0.015) && (d.x <= 0.044));
            })))
            .attr("stroke", 'blue')
            .attr("fill", "none")
            .attr("stroke-width", 2);

        svg.append("path")
            .attr("class", "line")
            .attr("d", line(data.filter(function (d) {
                return ((d.x >= 0.04) && (d.x <= 0.154));
            })))
            .attr("stroke", 'green')
            .attr("fill", "none")
            .attr("stroke-width", 2);

        svg.append("path")
            .attr("class", "line")
            .attr("d", line(data.filter(function (d) {
                return ((d.x >= 0.15) && (d.x <= 0.44));
            })))
            .attr("stroke", 'orange')
            .attr("fill", "none")
            .attr("stroke-width", 2);

        svg.append("path")
        //.datum(data)
            .attr("class", "line")
            .attr("d", line(data.filter(function (d) {
                return d.x >= 0.4;
            })))
            .attr("stroke", 'black')
            .attr("fill", "none")
            .attr("stroke-width", 2);

        svg.append("line")
            .attr("x1", 350)
            .attr("y1", 15)
            .attr("x2", 400)
            .attr("y2", 15)
            .attr("stroke-width", 1)
            .attr("stroke", "blue");

        svg.append("text")
            .attr("class", "value-text")
            .attr("x", 410)
            .attr("y", 20)
            .text("VLF")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "blue");

        svg.append("line")
            .attr("x1", 350)
            .attr("y1", 35)
            .attr("x2", 400)
            .attr("y2", 35)
            .attr("stroke-width", 1)
            .attr("stroke", "green");

        svg.append("text")
            .attr("class", "value-text")
            .attr("x", 410)
            .attr("y", 40)
            .text("LF")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "green");

        svg.append("line")
            .attr("x1", 350)
            .attr("y1", 55)
            .attr("x2", 400)
            .attr("y2", 55)
            .attr("stroke-width", 1)
            .attr("stroke", "orange");

        svg.append("text")
            .attr("class", "value-text")
            .attr("x", 410)
            .attr("y", 60)
            .text("HF")
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "orange");
    }

    function check_if_NAN(a) {

        if (isNaN(+a.value)) {
            a.classList.add("input_is_NAN");
            a.classList.remove("input_is_not_NAN");
        } else {
            a.classList.remove("input_is_NAN");
            a.classList.add("input_is_not_NAN");
        }

    }


    return {
        setPreviosSolution: function (str) {
        },

        setMode: function (str) {
        },

        //Инициализация ВЛ
        init: function () {
            container = $("#jsLab")[0];
            container.innerHTML = vlab_code;
            //document.getElementById("tool").innerHTML = this.tool;

            task_number = 1;

            variant = [];
            power_values = [];
            frequencies_values = [];

            $("#file_input").change(function () {
                read_file();
            });

            $(".btn_help").click(function () {
                show_help();
            });

            $(".btn_theory").click(function () {
                show_theory();
            });

            $(".btn_prev").click(function () {
                prev_task();
            });

            $(".btn_next").click(function () {
                next_task();
            });

            $(".btn_fourie").click(function () {
                var data_x = frequencies_values;
                var data_y = power_values;

                //console.log(data_x);
                //console.log(data_y);

                var plot_div = document.querySelector('.plot_2');
                var plot_comment = $(".plot_2_comment")[0];

                if ((data_x.length === 0) || (data_y.length === 0)) {
                    plot_div.classList.add("svg_hidden");
                    plot_comment.setAttribute("wrong_data", 0);
                    plot_comment.innerHTML = "Вы не загрузили файл с данными!";
                    plot_comment.style.display = "block";
                } else {
                    var not_number_data = false;
                    for (var i = 0, bin; i < data_x.length; i++) {
                        data_x[i] = +(data_x[i]);
                        data_y[i] = +(data_y[i]);
                        if (isNaN(data_x[i]) || isNaN(data_y[i])) {
                            not_number_data = true;
                        }
                    }
                    //console.log(data_x);
                    //console.log(data_y);

                    if (data_x.length !== data_y.length) {
                        plot_div.classList.add("svg_hidden");
                        plot_comment.setAttribute("wrong_data", 1);
                        plot_comment.innerHTML = "Проверьте введенные данные! Количество значений х должно быть равно количеству значений у и все значения должны быть числами!";
                        plot_comment.style.display = "block";
                    } else {
                        if (not_number_data) {
                            plot_div.classList.add("svg_hidden");
                            plot_comment.setAttribute("wrong_data", 1);
                            plot_comment.innerHTML = "Проверьте введенные данные! Количество значений х должно быть равно количеству значений у и все значения должны быть числами!";
                            plot_comment.style.display = "block";
                        } else {
                            plot_comment.style.display = "none";
                            plot_comment.innerHTML = "";
                            plot_comment.setAttribute("wrong_data", 0);
                            plot_div.classList.remove("svg_hidden");
                            draw_plot(data_x, data_y);
                        }
                    }
                }
            });


            //получение варианта задания
            setVariant();

            $(".file_txt_button").click(function () {
                download_file_txt();
            });

            $(".file_xlsx_button").click(function () {
                download_file_xlsx();
            });
            $(".input_is_not_NAN").change(function () {
                check_if_NAN(this);
            })
        },

        getResults: function () {

            var files = document.getElementById("file_input").files;

            if (files.length === 0) {
                frequencies_values = [0];
                power_values = [0];

                var plot_div = document.querySelector('.plot_2');
                var plot_comment = $(".plot_2_comment")[0];
                plot_div.classList.add("svg_hidden");
                plot_comment.innerHTML = "Вы не загрузили файл!";
                plot_comment.style.display = "block";

                plot_div = document.querySelector('.plot_1');
                plot_comment = $(".plot_1_comment")[0];
                plot_div.classList.add("svg_hidden");
                plot_comment.innerHTML = "Вы не загрузили файл!";
                plot_comment.style.display = "block";

            } else {
                var hf = +(removeBlankAnswer(document.getElementById("HF_value").value));
                var lf = +(removeBlankAnswer(document.getElementById("LF_value").value));
                var vlf = +(removeBlankAnswer(document.getElementById("VLF_value").value));
                var tp = +(removeBlankAnswer(document.getElementById("TP_value").value));

                var hfp = +(removeBlankAnswer(document.getElementById("HFp_value").value));
                let hfp_radio_answers = document.querySelectorAll('input[name="HFpDescription"]');
                for (let elem in hfp_radio_answers) {
                    if (hfp_radio_answers[elem].checked)
                        var hfpdescription = hfp_radio_answers[elem].value;
                }

                var lfp = +(removeBlankAnswer(document.getElementById("LFp_value").value));
                let lfp_radio_answers = document.querySelectorAll('input[name="LFpDescription"]');
                for (let elem in lfp_radio_answers) {
                    if (lfp_radio_answers[elem].checked)
                        var lfpdescription = lfp_radio_answers[elem].value;
                }

                var vlfp = +(removeBlankAnswer(document.getElementById("VLFp_value").value));
                let vlfp_radio_answers = document.querySelectorAll('input[name="VLFpDescription"]');
                for (let elem in vlfp_radio_answers) {
                    if (vlfp_radio_answers[elem].checked)
                        var vlfpdescription = vlfp_radio_answers[elem].value;
                }

                var ic = +(removeBlankAnswer(document.getElementById("IC_value").value));
                var ivv = +(removeBlankAnswer(document.getElementById("IVV_value").value));
                var isca = +(removeBlankAnswer(document.getElementById("ISCA_value").value));

                let vns_radio_answers = document.querySelectorAll('input[name="VNSRegulationDescription"]');
                for (let elem in vns_radio_answers) {
                    if (vns_radio_answers[elem].checked)
                        var vnsdescription = vns_radio_answers[elem].value;
                }

                var answer = {
                    fourieFrequencies: frequencies_values.join(","),
                    powerValues: power_values.join(","),
                    hf: hf,
                    lf: lf,
                    vlf: vlf,
                    tp: tp,
                    hfp: hfp,
                    lfp: lfp,
                    vlfp: vlfp,
                    hfpDescription: hfpdescription,
                    lfpDescription: lfpdescription,
                    vlfpDescription: vlfpdescription,
                    ic: ic,
                    ivv: ivv,
                    isca: isca,
                    vnsregulationDescription: vnsdescription
                };

                var numb_answer = {
                    hf: hf,
                    lf: lf,
                    vlf: vlf,
                    tp: tp,
                    hfp: hfp,
                    lfp: lfp,
                    vlfp: vlfp,
                    ic: ic,
                    ivv: ivv,
                    isca: isca,
                };

                var non_number = false;
                for (var key in numb_answer) {
                    if (isNaN(numb_answer[key])) {
                        non_number = true;
                        answer[key] = 0;
                        //console.log(key);
                    }
                }
                //console.log(answer);
                if (non_number) {
                    var plot_div = document.querySelector('.plot_2');
                    var plot_comment = $(".plot_2_comment")[0];
                    plot_div.classList.add("svg_hidden");

                    plot_comment.innerHTML = "Проверьте данные! Все введенные значения должны быть числами!";
                    plot_comment.style.display = "block";

                    plot_div = document.querySelector('.plot_1');
                    plot_comment = $(".plot_1_comment")[0];
                    plot_div.classList.add("svg_hidden");
                    plot_comment.innerHTML = "Проверьте данные! Все введенные значения должны быть числами!";
                    plot_comment.style.display = "block";
                } else {
                    return JSON.stringify(answer);
                }


            }


        },
        calculateHandler:

            function (text, code) {
            }

        ,
        // для вызова метода calculate сервера - вызывать функцию ANT.calculate, она вызывает calculate на сервере и передает результат text и code, которые можно вызвать функцией calculateHandler
    }
}

var Vlab = init_lab();


