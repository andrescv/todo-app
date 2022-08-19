import { PrismaClient, User } from '@prisma/client';

const INITIAL_USER: Pick<User, 'fullName' | 'email' | 'password'> = {
  fullName: process.env.INITIAL_USER_FULL_NAME || 'Foo Bar',
  email: process.env.INITIAL_USER_EMAIL || 'foo@bar.com',
  password: process.env.INITIAL_USER_PASSWORD || 'FooBar123$',
};

async function seed() {
  const client = new PrismaClient();

  try {
    const user = await client.user.upsert({
      where: { email: INITIAL_USER.email },
      create: INITIAL_USER,
      update: INITIAL_USER,
    });

    console.log(`User ${user.email} created!!!`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.$disconnect();
  }
}

seed();
