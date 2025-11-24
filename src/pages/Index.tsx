import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const timeSlots = [
    '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const services = [
    {
      icon: 'Sparkles',
      title: 'Снятие порчи и сглаза',
      description: 'Диагностика и очищение энергетического поля от негативных программ и воздействий',
      duration: '1-2 часа',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Исцеление отношений',
      description: 'Работа с родовыми программами, восстановление гармонии в семье и личных отношениях',
      duration: '1.5 часа',
      price: 'от 6000 ₽'
    },
    {
      icon: 'Leaf',
      title: 'Энергетическое очищение',
      description: 'Глубокая чистка чакр, восстановление энергетического баланса и жизненных сил',
      duration: '1 час',
      price: 'от 4000 ₽'
    },
    {
      icon: 'Sun',
      title: 'Исцеление от болезней',
      description: 'Работа с причинами заболеваний на энергетическом уровне, восстановление здоровья',
      duration: '2 часа',
      price: 'от 7000 ₽'
    }
  ];

  const testimonials = [
    {
      name: 'Елена, 42 года',
      text: 'После сеанса почувствовала невероятное облегчение. Ушла тяжесть, которую носила годами. Спасибо за ваш дар!',
      rating: 5
    },
    {
      name: 'Михаил, 35 лет',
      text: 'Скептически относился к целительству, но результат превзошёл все ожидания. Вернулась радость жизни.',
      rating: 5
    },
    {
      name: 'Анна, 50 лет',
      text: 'Помогли восстановить отношения в семье. Атмосфера в доме изменилась в лучшую сторону. Благодарю!',
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: 'Как проходит сеанс целительства?',
      answer: 'Сеанс начинается с диагностики вашего энергетического поля. Затем я провожу очищение и восстановление энергетического баланса через работу с чакрами, снятие блоков и негативных программ. Вы будете в расслабленном состоянии, многие чувствуют тепло и лёгкость.'
    },
    {
      question: 'Сколько сеансов необходимо?',
      answer: 'Это индивидуально. Обычно видимые изменения происходят после 1-3 сеансов. При серьёзных проблемах может потребоваться курс из 5-7 сеансов. На первой консультации я определю оптимальное количество для вашей ситуации.'
    },
    {
      question: 'Можно ли проводить сеансы онлайн?',
      answer: 'Да, энергия не знает расстояний. Я провожу эффективные сеансы онлайн через видеосвязь. Результативность дистанционных сеансов не уступает личным встречам.'
    },
    {
      question: 'Есть ли противопоказания?',
      answer: 'Целительство — это мягкий метод, который практически не имеет противопоказаний. Однако при серьёзных психических расстройствах рекомендую проконсультироваться с врачом. Важно понимать, что целительство дополняет, но не заменяет медицинскую помощь.'
    },
    {
      question: 'Как подготовиться к сеансу?',
      answer: 'Приходите в удобной одежде, желательно натуральных тканей. За день до сеанса избегайте алкоголя и тяжёлой пищи. Настройтесь на позитивные изменения и будьте открыты процессу исцеления.'
    }
  ];

  const blogPosts = [
    {
      title: 'Признаки энергетического истощения',
      date: '15 ноября 2024',
      excerpt: 'Узнайте, как распознать упадок жизненных сил и что с этим делать...',
      image: 'https://cdn.poehali.dev/projects/dce38c70-21fc-4f05-8b6c-a669beaf401b/files/af272294-eab0-4c61-9ee1-d93bcda46366.jpg'
    },
    {
      title: 'Как защитить себя от негатива',
      date: '10 ноября 2024',
      excerpt: 'Простые практики энергетической защиты на каждый день...',
      image: 'https://cdn.poehali.dev/projects/dce38c70-21fc-4f05-8b6c-a669beaf401b/files/af272294-eab0-4c61-9ee1-d93bcda46366.jpg'
    },
    {
      title: 'Исцеление через прощение',
      date: '5 ноября 2024',
      excerpt: 'Почему прощение — это ключ к освобождению от прошлого...',
      image: 'https://cdn.poehali.dev/projects/dce38c70-21fc-4f05-8b6c-a669beaf401b/files/af272294-eab0-4c61-9ee1-d93bcda46366.jpg'
    }
  ];

  const handleBooking = () => {
    if (!date || !selectedTime || !name || !phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите дату, время и контактные данные',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: `Ожидайте звонка для подтверждения записи на ${date.toLocaleDateString()} в ${selectedTime}`,
    });

    setName('');
    setPhone('');
    setMessage('');
    setSelectedTime('');
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-foreground">Путь Исцеления</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">Обо мне</a>
            <a href="#testimonials" className="text-foreground/70 hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">Вопросы</a>
            <a href="#blog" className="text-foreground/70 hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="text-foreground/70 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Онлайн-запись на консультацию</DialogTitle>
                <DialogDescription>
                  Выберите удобные дату и время для сеанса
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <div>
                    <Label>Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border w-full"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label>Выберите время</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? 'default' : 'outline'}
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Введите ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий (необязательно)</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите вашу ситуацию или задайте вопрос"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <Button onClick={handleBooking} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Подтвердить запись
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Путь к исцелению<br />начинается здесь
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Снятие порчи, энергетическое очищение и восстановление гармонии души и тела
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на сеанс
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Онлайн-запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Выберите удобные дату и время для сеанса
                  </DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 py-4">
                  <div className="space-y-4">
                    <div>
                      <Label>Выберите дату</Label>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Выберите время</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? 'default' : 'outline'}
                            onClick={() => setSelectedTime(time)}
                            className="w-full"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Комментарий (необязательно)</Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите вашу ситуацию или задайте вопрос"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                      />
                    </div>
                    <Button onClick={handleBooking} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Подтвердить запись
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться
            </Button>
          </div>
          <div className="mt-16">
            <img
              src="https://cdn.poehali.dev/projects/dce38c70-21fc-4f05-8b6c-a669beaf401b/files/af272294-eab0-4c61-9ee1-d93bcda46366.jpg"
              alt="Спокойная природа"
              className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Комплексный подход к восстановлению энергетического здоровья
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {service.duration}
                    </span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4 bg-secondary/15">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="uppercase tracking-[0.3em] text-sm text-primary">Мои практики</span>
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-foreground">Методики и ритуалы исцеления</h2>
            <p className="text-lg text-muted-foreground">
              Каждая сессия включает работу с энергиями, телом и сознанием. Я использую проверенные ритуалы, чтобы мягко провести вас через трансформацию.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-6 h-full bg-card/90 backdrop-blur-md border-border/50 animate-fade-in">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Waves" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Чистка четырёх стихий</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Сочетание силы воды, огня, земли и воздуха для полного обновления энергии. Ритуал снимает следы негативных воздействий и возвращает спокойствие душе.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2"><Icon name="Droplets" size={18} /> Вода смывает эмоциональные блоки</p>
                <p className="flex items-center gap-2"><Icon name="Flame" size={18} /> Огонь трансформирует страхи</p>
                <p className="flex items-center gap-2"><Icon name="Feather" size={18} /> Воздух наполняет лёгкостью</p>
              </CardContent>
            </Card>
            <Card className="p-6 h-full bg-card/90 backdrop-blur-md border-border/50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Flower" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Ритуал родовой гармонии</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Работа с родовыми каналами, восстановление связи с предками и укрепление семейной энергии. Помогает вернуть мир в отношения и снять повторяющиеся сценарии.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2"><Icon name="Infinity" size={18} /> Выявление родовых узлов</p>
                <p className="flex items-center gap-2"><Icon name="Link2" size={18} /> Восстановление потоков поддержки</p>
                <p className="flex items-center gap-2"><Icon name="HeartHandshake" size={18} /> Благословение будущих поколений</p>
              </CardContent>
            </Card>
            <Card className="p-6 h-full bg-card/90 backdrop-blur-md border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Moon" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Лунные практики исцеления</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Индивидуальные практики на растущей и полной луне. Подходят для запуска новых проектов, исцеления сердца и укрепления интуиции.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2"><Icon name="Sparkles" size={18} /> Настройка на циклы луны</p>
                <p className="flex items-center gap-2"><Icon name="Wand" size={18} /> Авторские аффирмации</p>
                <p className="flex items-center gap-2"><Icon name="BookOpen" size={18} /> Домашние задания для закрепления</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/dce38c70-21fc-4f05-8b6c-a669beaf401b/files/1f7fd775-4e4a-4555-8014-67cff019ba27.jpg"
                alt="Целитель"
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Меня зовут Мария, и более 15 лет я помогаю людям обрести гармонию и исцеление. 
                Мой путь начался с личного опыта преодоления тяжёлой болезни, когда традиционная 
                медицина была бессильна.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Я прошла обучение у мастеров энергетического целительства в России, Индии и Непале. 
                Владею методиками работы с чакрами, снятия негативных программ и родовых проклятий.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Моя миссия — помочь вам открыть внутренние ресурсы для исцеления, вернуть радость 
                жизни и восстановить связь с собой. Каждый человек уникален, поэтому я работаю 
                индивидуально, подбирая методы под вашу ситуацию.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Award" size={24} />
                  <span className="font-semibold">15+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Users" size={24} />
                  <span className="font-semibold">500+ исцелённых</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Истории исцеления моих клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <CardDescription className="text-base italic leading-relaxed">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на частые вопросы о целительстве
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Блог</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Полезные статьи об энергетическом здоровье
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 text-primary">
                    Читать далее <Icon name="ArrowRight" className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь со мной удобным способом
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Телефон</CardTitle>
                <CardDescription className="text-base">
                  +7 (999) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
                <CardDescription className="text-base">
                  healing@example.ru
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
                <CardDescription className="text-base">
                  Написать в мессенджер
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl font-bold text-foreground">Путь Исцеления</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Целительство и снятие порчи • Москва • 2024
          </p>
          <p className="text-sm text-muted-foreground">
            Все услуги носят консультативный характер и не заменяют медицинскую помощь
          </p>
        </div>
      </footer>
    </div>
  );
}