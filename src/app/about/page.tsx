import Button from '@/components/ui/button';
import { IconChevronRight } from '@tabler/icons-react';

const page = () => {
  return (
    <section className="from-tertiary-dark to-tertiary flex h-screen w-full flex-col items-start justify-center bg-gradient-to-br">
      <div className="container flex flex-col gap-y-4 text-white">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor magna eu lorem luctus,
          eu dapibus augue pulvinar. Nulla facilisi. Duis facilisis mauris vel eros laoreet, et
          commodo risus dictum. Donec non tellus velit. Integer sollicitudin justo in quam
          fermentum, ac malesuada nisi ultrices. Donec tincidunt bibendum eros nec congue.
        </p>
        <p className="text-lg">
          Phasellus et varius est. Sed in lorem a arcu congue elementum. Morbi id magna id quam
          aliquam porta. Nullam lacinia convallis tortor, eu commodo mi fermentum sit amet. Vivamus
          condimentum tempus augue, id fermentum odio hendrerit at. Sed ut est at justo iaculis
          lacinia.
        </p>
        <Button
          className="max-w-max"
          href="/"
          variant="accent"
          icon={<IconChevronRight size={18} stroke={1.5} />}
        >
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default page;
