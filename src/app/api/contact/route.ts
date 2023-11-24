import { sendEmail } from '@/service/email';
import * as yup from 'yup';

// route 로직 서버에서 처리할 로직 

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export async function POST(req: Request) {
  const body = await req.json(); // 노드에서 동작하기때문

  if(!bodySchema.isValidSync(body)) {
    return new Response(
      JSON.stringify({message: '유효하지 않은 포맷'}), 
      {status: 400}
    );
  }

  return sendEmail(body)
  .then(
    () => new Response(
      JSON.stringify({message: '메일을 성공적으로 보냄'}),
      {status: 200}
    )
  ).catch(err => {
    console.error(err);
    return new Response(
      JSON.stringify({message: '메일 전송에 실패'}),
      {status: 500}
    )
  })

}

